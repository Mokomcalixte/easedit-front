
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoutes = ({
    component: Component,
    ...rest
}) => {
    const navigate = useNavigate()  

    useEffect(() => {

        console.log('ProtectedRoutes')
    const token = localStorage.getItem('token')
    if (!token) {
        navigate('/')
    }
    },[])
    return (
        <Component {...rest} />
    );
}

export default ProtectedRoutes;