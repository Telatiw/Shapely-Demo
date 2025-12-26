import React from 'react'

export default function PrimeBtn({text,className}) {
    return (
        <button className={`w-44 py-4 text-base bg-primary font-semibold text-primary-content cursor-pointer transition-all  hover:bg-primary/80 ${className}`} type='button'>{text}</button>
    )
}
