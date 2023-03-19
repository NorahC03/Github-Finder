import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function UserList({id,user:{login,avatar_url}}) {
    return ( <>
        <div className="card shadow-md compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                <div className="avatar">
                  <div className="rounded-full shadow w-14 h-14">
                    <img src={avatar_url} alt="creator"/>
                    </div>  
                </div>
                </div>
                <div>
                    <div className="h2 card-title">{login}</div>
                    <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>
    </> );
}

export default UserList;
UserList.propTypes={
    user:PropTypes.object.isRequired

}