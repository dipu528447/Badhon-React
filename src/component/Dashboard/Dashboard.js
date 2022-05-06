import React,{useContext} from 'react';
import { getAuth, signOut } from "firebase/auth";
import { userContext } from './../../App';
import { Navigate, useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const [user,setUser] = useContext(userContext)
    const navigate= useNavigate();
    function logout(){
        const auth = getAuth();
        signOut(auth).then(setUser({isSigned:false}))
        .catch((error) => {
        // An error happened.
        console.log(error)
        });

        localStorage.clear();
        navigate("/")
    }
    return (
        <div>
            <h1>this is dashboard</h1>                        
            <button onClick={logout} className='btn btn-info'>SignOut</button>
        </div>
    );
};

export default Dashboard;