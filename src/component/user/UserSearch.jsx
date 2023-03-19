import {useState,useContext} from "react";
import GithubContext from "../../Context/Github/githubContext";
import AlertContext from "../../Context/Alert/AlertContext";
function UserSearch(){
  const[text,setText]=useState('');
  const {result,SearchUser,ClearUser}=useContext(GithubContext);
  const {SetAlert}=useContext(AlertContext);
  const handelChange=(e)=>{
    setText(e.target.value);
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(text===""){
     SetAlert("Please Enter Something","error");
    }else{
      SearchUser(text)
      setText("")
    }
  }

    return(
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
      <form onSubmit={handelSubmit}>
      <div className="form-control">
              <div className="relative">
                  <input 
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handelChange}
                  />
                  <button type="submit"className="absolute top-0 right-0 rounded-md rounded-l-none w-36 btn btn-lg">Go</button>
              </div>
            </div> 
      </form>
        </div>
        {result.length >0 &&(
              <div>
               <button className="button btn-ghost btn-lg rounded-md" onClick={ClearUser}>
               Clear
                </button>
             </div>
        )}
     
      </div>

    )

}
export default UserSearch;