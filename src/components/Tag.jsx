'use client';

import style from './Tag.module.css'


export default function Button({ styled, click, children }) {

    return (
        <span
            class={`w-[40%] bg-green-100 text-green-800 text-xs text-center font-medium px-2.5 py-0.5 my-1 rounded-2xl 
            dark:bg-gray-700 dark:text-green-400 border border-green-400 ${style[styled]}`}
            onClick={click}
        >
            {children}
        </span>
    )
}

