import {useContext} from "react";
import { InfinitySpin } from  'react-loader-spinner'
import UserList from "./UserList";
import GithubContext from "../../Context/Github/githubContext";
function UserResult(){
    const {loading,result}=useContext(GithubContext);
    // const [result,setResult]=useState([]);
    // const [loading,setLoading]=useState(true);
    // const fetchData=async()=>{
    //     const response =await fetch(`https://api.github.com/users`,{
    //         headers:{
    //             Authorization:`token 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`
    //         },
    //     })
    //     const data=await response.json();
    //     // const newArray = [...result,data];
    //     setResult(data);
    //     // console.log(data);
    //     console.log(result);
    //     setLoading(false);
    // }
    if(!loading){
        return(<>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
             {result.map((item)=>(
                <h3>
                     <UserList id={item.id} user={item}/>
                </h3>
                
             ))}
            </div>
             </>)
    }else{
        return(<>
        <div className=" flex  place-content-center">
        <InfinitySpin 
        width='200'
        color="#4fa94d"
        />
        </div>

        </>)
    }
   
}
export default UserResult ;