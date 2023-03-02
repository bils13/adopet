import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    
    const login = (email, password) => {
        const getUser = localStorage.getItem(`${email}`)
        if(!!getUser===true) {
            const getUserObj = JSON.parse(getUser)
            if(getUserObj.password===password){
                setUser(email)
                navigate('/homepets')
            }
            else {
                setUser(false)
            }
        } else {
            setUser(false)
        }        
    }

    const logout = () => {
        setUser(null)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>)
}