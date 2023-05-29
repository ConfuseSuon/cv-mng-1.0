import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { isLogged } = useSelector((store) => store.auth)

    if (!isLogged) {
        return <Navigate to="login" />
    }

    return (
        children
    )
}

export default ProtectedRoute