import React from 'react'
import files from '../Data/Files.json'
import { Link } from 'react-router-dom';

export default function Files(){
    return(
        <section className='flex flex-wrap gap-16 justify-center my-12 p-5'>
            {files.map(completeFiles => (
                    <div key={completeFiles.id} className='w-full transition-transform duration-1000 relative md:w-4/12 hover:scale-110 hover:brightness-50'>
                        <Link className="flex w-full" to={`/${completeFiles.title}`}>
                            <img className='w-full h-72' src={completeFiles.cover} alt={completeFiles.title}/>
                            <span className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1'>{completeFiles.title}</span>
                        </Link>
                    </div>
                ))}
        </section>
    )
}