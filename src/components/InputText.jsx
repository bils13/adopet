import React from 'react'

export default ( {type, placeholder, name, register, required, classe} ) => {
    return (
        register!=undefined ? 
        <input className={classe} type={type} placeholder={placeholder} name={name} {...register(name, {required})} ></input>
        : <input className={classe} type={type} placeholder={placeholder} name={name} ></input>
    )
    
}