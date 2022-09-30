import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProtectedRoute = ({
    isLogin,
    loading,
    children,
}) => {
    console.log('isLogin', isLogin); 
    console.log('loading', loading); 

    if (loading) {
        return <Preloader />
    } else {
        if (!isLogin) {
            return <Navigate to="/" replace />;
        }
        return children;
    }
};


export default ProtectedRoute;