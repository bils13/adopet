import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./homePage"
import Register from "./register"
import Login from "./login"

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}