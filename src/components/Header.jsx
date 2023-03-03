import React, { useContext } from 'react';
import logoWhite from '../img/logoAdopetWhite.svg';
import iconHouse from '../img/Casa.svg';
import iconMessage from '../img/Mensagens.svg';
import { AuthContext } from '../contexts/Auth';
import Button from './Button';

export default ( {icon } ) => {
    const { authenticated } = useContext(AuthContext)
    return (
        <div className='header__icons'>
            <div className='header_homeMessage'>
                <img className='logo' src={logoWhite} alt='Logo Adopet'/>
                <img src={iconHouse} alt='Logo House'/>
                <img src={iconMessage} alt='Logo Message'/>
            </div>
            {icon && 
                (<div className='header__iconUser'>
                    <img className='header__userIcon' src={icon} alt='Icon User'/>
                    {authenticated==true && (<Button classe='button__logout' text='Logout'/>)}
                </div>)}
             
        </div>
    )
}