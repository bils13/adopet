import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

export default ( {classe, text, click} ) => {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)
    return (
        <React.Fragment>
        {!!click ? <button className={classe} onClick={click==='logout' ? logout : () => navigate(`/${click}`)}>{text}</button> : <button className={classe}>{text}</button>}
        </React.Fragment> 
    )
}