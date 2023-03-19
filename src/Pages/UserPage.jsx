import { useContext,useEffect } from "react";
import { useParams,useLocation } from "react-router-dom";
import GithubContext from "../Context/Github/githubContext";
function UserPage(){
    const{UserResult,user}=useContext(GithubContext);
    const {login}=useParams();
    useEffect(()=>{
        UserResult(login);
    },[])


    return (
        <>
       {user.login}
        </>
    )
}
export default UserPage;