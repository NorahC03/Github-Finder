import { createContext,useReducer} from "react";
import  reducer from "./githubReducer";
 const GithubContext=createContext();
//  const GithubUrl=process.env.REACT_APP_GITHUB_URL;
//  const GithubToken=process.env.REACT_APP_GITHUB_API_TOKEN;

 export const GithubProvider=({children})=>{

    const initialState={
        result:[],
        user:{},
        loading:false
    }
    const [state,dispatch]=useReducer(reducer,initialState);
   function setLoading(){
    dispatch({
        type:"SET_LOADING"
    })
   }
    // const fetchData=async()=>{
    //     setLoading()
    //     // const param=new URLSearchParams();
    //     const response =await fetch('https://api.github.com/users',{
    //         headers:{
    //             Authorization:'token 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'
    //         },
    //     })
    // const data=await response.json();
    // // console.log(data);
    //    dispatch({
    //     type:"GET_USER",
    //     payload:data,
    //    })
    //  //console.log(state.result);
    // }
    const SearchUser=async(text)=>{
        setLoading()
         const params=new URLSearchParams({
            q:text
         });
        const response =await fetch(`https://api.github.com/search/users?${params}`,{
            headers:{
                Authorization:'token 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'
            },
        })
    const data=await response.json();
    // console.log(data.items);
       dispatch({
        type:"GET_USER",
        payload:data.items,
       })
     //console.log(state.result);
    }
    const ClearUser=()=>{
        dispatch({
            type:"CLEAR_USER"
        })
    }
    const UserResult=async(login)=>{
        setLoading()
        const response =await fetch(`https://api.github.com/users/${login}`,{
            headers:{
                Authorization:'token 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'
            },
        })
        if(response.status===404){
            window.location='/not-found'
        }else{
           const data=await response.json();
           dispatch({
            type:'SET_USER',
            payload:data,
           })
        }
 
     //console.log(state.result);
    }
    return (<GithubContext.Provider value={{result:state.result,loading:state.loading,user:state.user,SearchUser,ClearUser,UserResult}}>
        {children}
    </GithubContext.Provider>)
}
 export default GithubContext;