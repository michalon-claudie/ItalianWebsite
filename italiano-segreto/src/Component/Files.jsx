import React from 'react'
import files from '../Data/Files.json'
import { Link } from 'react-router-dom';
import '../Style/Files.scss'

export default function Files(){
    return(
        <section className='FilesContainer'>
            {files.map(completeFiles => (
                    <div key={completeFiles.id} className='goToFiles'>
                        <Link to={`/${completeFiles.title}`}>
                            <img src={completeFiles.cover} alt={completeFiles.title}/>
                        </Link>
                    </div>
                ))}
        </section>
    )
}