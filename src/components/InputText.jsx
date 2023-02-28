import React from 'react'

export default ( {type, placeholder, name, register, required, classe, value, getType} ) => {
    return (
        register!=undefined ? 
        <input className={classe} type={type} placeholder={placeholder} name={name} {...register(name, {required})} ></input>
        : <input className={classe} type={type} placeholder={placeholder} name={name} onChange={(e) => value(e.target.value)} onClick={() => getType(type)}></input>
    )
    
}