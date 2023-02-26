import React from 'react'

export default ( { link, content, classe } ) => {
    return (
        <a href={link} className={classe}>{content}</a>
    )
}