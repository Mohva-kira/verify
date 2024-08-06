import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const userToken = useSelector((state) => state?.auth?.data?.jwt ? state.auth?.data?.jwt : JSON.parse(localStorage.getItem('auth')) && JSON.parse(localStorage.getItem('auth')).jwt);

    console.log('token', userToken)
    const CheckUserToken = () => {
        
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            CheckUserToken();
        }, [isLoggedIn]);

        console.log('En ligne ? ',isLoggedIn)
        
    return (
        <React.Fragment>
            {
                isLoggedIn ? <Outlet/> : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;