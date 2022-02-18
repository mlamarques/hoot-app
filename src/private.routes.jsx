import { React, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { api } from './services/api';

function PrivateRoutes() {
    const [isAuth, setIsAuth] = useState()
    const token = localStorage.getItem('accessToken')

    useEffect(() => {
        if (token === null) {
            // console.log('Access token null')
            setIsAuth(false)
            return isAuth
        } else {
            api.get('/session')
                .then(res => {
                if (res.data.isSessionActive) {
                    setIsAuth(res.data.isSessionActive)
                    return isAuth
                } else {
                    return false
                }
            })
        }
    }, [isAuth, token])

    if (isAuth === undefined) return null

    return (
        isAuth ? <Outlet /> : <Navigate to="/login" />
    )
    
}

export default PrivateRoutes;