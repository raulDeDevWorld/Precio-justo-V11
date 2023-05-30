'use client';

import { useRouter } from 'next/navigation';


export default function Button({click, type, name, onChange,reference, placeholder, styled}) {

    const router = useRouter()


    function handlerButton(e) {
        e.preventDefault(e)
        router.push(click)
    }


    return (
        <input
            type={type}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"

            // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3
            // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChange}
            // style={{...styled}}
            ref={reference}
            placeholder={placeholder}
          />
    )
}