
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <span className="flex justify-center items-center h-screen">লোডিং হচ্ছে একটু সবুর...</span>
    }

    if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;