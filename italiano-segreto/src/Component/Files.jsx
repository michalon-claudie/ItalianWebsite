import React from 'react'
import files from '../Data/Files.json'
import { Link } from 'react-router-dom';

export default function Files(){
    return(
        <section className='FilesContainer'>
            <div className='files'>
            {files.map(completeFiles => (
                    <div key={completeFiles.id} className='goToFiles'>
                        <Link to={`/${completeFiles.title}`}>
                            <img src={completeFiles.cover} alt={completeFiles.title}/>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}