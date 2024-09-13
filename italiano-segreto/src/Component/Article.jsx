import React from 'react'

export default function Article ({title, picture,text}){
    return(
        <section>
            <h2>{title}</h2>
            <img src={picture} alt="picture article number ${idArticle}"/>
            <p>{text}</p>
        </section>
    )
}