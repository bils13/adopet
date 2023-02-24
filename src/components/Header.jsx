import React from 'react';
import logoWhite from '../img/logoAdopetWhite.svg';
import iconHouse from '../img/Casa.svg';
import iconMessage from '../img/Mensagens.svg';

export default () => {
    return (
        <div className='header__icons'>
            <img className='logo' src={logoWhite} alt='Logo Adopet'/>
            <img src={iconHouse} alt='Logo House'/>
            <img src={iconMessage} alt='Logo Message'/>
        </div>
    )
}