import React, { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'

export default ( {classe, text} ) => {
    const {logout} = useContext(AuthContext)
    return (
        text==='Logout' ? <button className={classe} onClick={logout}>{text}</button> : <button className={classe}>{text}</button> 
    )
}