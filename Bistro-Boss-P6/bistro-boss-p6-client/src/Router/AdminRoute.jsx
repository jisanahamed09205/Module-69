import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";

const AdminRoute = ({children}) => {

    const {user,loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        // return <span className="flex justify-center items-center h-screen">Loading...</span>
        return <span className="flex justify-center items-center h-screen">লোডিং হচ্ছে একটু সবুর...</span>
    }

    if(user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;