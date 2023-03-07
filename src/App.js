import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Message } from "./message"
import { AuthContext, AuthProvider } from "./contexts/Auth"
import { useContext } from "react"
import HomePage from "./homePage"
import Register from "./register"
import Login from "./login"
import HomePets from "./homePets"
import { Profile } from './profile'

export default () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext)
        if(!authenticated){
            return <Navigate to='/login'/> 
        }
        return children
    }
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/homepets' element={<Private><HomePets /></Private>} />
                    <Route path='/message' element={<Private><Message /></Private>} />
                    <Route path='/profile' element={<Private><Profile /></Private>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}