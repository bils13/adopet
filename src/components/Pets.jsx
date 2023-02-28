import React from 'react'
import IconMessage from '../img/IconMessage.svg'

export default ( {img, name, years, size, description, city} ) => {
    return (
        <div className='pets'>
            <div className='pets__img'>
                <img src={img} />
            </div>
            <div className='pets__info'>
                <h1>{name}</h1>
                <div className='pets__ficha'>
                    <p>{years}</p>
                    <p>{size}</p>
                    <p>{description}</p>
                </div>
                <p className='pets__city'>{city}</p>
                <div className='pets__talk'>
                    <img src={IconMessage} alt='Icon Message'/>
                    <p>Falar com responsável</p>
                </div>
            </div>
        </div>
    )
}