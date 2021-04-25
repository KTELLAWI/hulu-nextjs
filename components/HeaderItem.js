import React from 'react'

export default function HeaderItem({title,Icon}) {
    return (
        <div className="group flex flex-col items-center w-12 sm:w-20 hover: text-white "> 
            <Icon className="h-8 mb-1 cursor-pointer group-hover:animate-bounce"/>
            <p className=" cursor-pointer opacity-0 group-hover:opacity-100 tracking widest">{title}</p>
            
        </div>
    )
}
