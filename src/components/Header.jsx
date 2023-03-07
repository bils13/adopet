import React, { useContext } from 'react';
import logoWhite from '../img/logoAdopetWhite.svg';
import iconHouse from '../img/Casa.svg';
import iconMessage from '../img/Mensagens.svg';
import { AuthContext } from '../contexts/Auth';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default ( { icon } ) => {
    const { authenticated, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div className='header__icons'>
            <div className='header_homeMessage'>
                <img className='logo' src={logoWhite} alt='Logo Adopet'/>
                <img src={iconHouse} alt='Logo House' onClick={() => navigate('/homepets')}/>
                <img src={iconMessage} alt='Logo Message' onClick={() => navigate('/message')}/>
            </div>
            {icon && 
                (<div className='header__iconUser'>
                    <img className='header__userIcon' src={icon} alt='Icon User' onClick={() => navigate('/profile')}/>
                    {authenticated==true && (<Button classe='button__logout' text='Logout' click='logout'/>)}
                </div>)}
             
        </div>
    )
}