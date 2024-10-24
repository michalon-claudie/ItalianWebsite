import React from 'react'

export default function Banner ({imageUrl,text}){
    return(
        <div className="bg-cover bg-fixed p-24" style={{ backgroundImage: `url(${imageUrl})` }}>
            <p className='text-white text-start italic text-2xl'>{text}</p>
        </div>
    )
}