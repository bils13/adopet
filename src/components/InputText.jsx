import React from 'react'

export default ( {type, placeholder, name, register, required} ) => {
    return (
        <input type={type} placeholder={placeholder} name={name} {...register(name, {required})}></input>
    )
    
}