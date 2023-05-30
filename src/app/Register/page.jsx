'use client'
import { writeUserData, readUserData} from '@/supabase/utils'
import { useUser } from '@/context/Context'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../page.module.css'
import Button from '../../components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import { WithAuth } from '@/HOCs/WithAuth'


import { useRouter } from 'next/navigation';

function Home() {

    const { user, userDB, setUserProfile, setUserSuccess, success, setUserData } = useUser()
    const router = useRouter()

    const [rol, setRol] = useState('Cliente')
    const [ciudad, setCiudad] = useState('La paz')


    const onClickHandler = (name, value) => {
        setRol(value)
    }
    const onClickHandlerCity = (name, value) => {
        setCiudad(value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        let nombre = e.target[0].value
        writeUserData('Users', { uuid: user.uuid, nombre, rol, ciudad}, user.uuid , userDB, setUserData, setUserSuccess)
    }


    // useEffect(() => {
    //     // if (user) readUserData('Users', user.user.id, userDB, setUserData)
    //     // if (user && user.rol ) router.replace(user.rol)
    //   }, [userDB]);

console.log(user)
    return (

        <div className={style.container}>
            <header className={style.header}></header>
            <main className={style.main}>
                <Image src="/logo-main.svg" width="200" height="200" alt="User" />
                <br />
                <br />
                <div
                    className="w-full max-w-sm p-0 bg-transparent rounded-lg shadow sm:p-6 md:p-8 "
                // className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 
                // dark:bg-gray-800 dark:border-gray-700"
                >
                    <form className="space-y-6" onSubmit={registerHandler} >
                        <h5 className="text-xl font-medium text-white">Registrate</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-white">Nombre</label>
                            <Input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-white">Tipo de cuenta</label>
                            <Select arr={['Cliente', 'Medico', 'Clinica', 'Distribuidor']} name='rol' click={onClickHandler} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm text-left  font-medium text-white">Ciudad</label>
                            <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} name='Ciudad' click={onClickHandlerCity} />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Políticas de Servicio</label>
                            </div>
                            <a href="#" className="ml-auto text-green-400 text-sm text-blue-700 hover:underline">Olvidaste tu contraseña?</a>
                        </div>
                        <Button type="submit" theme="Primary">Continuar</Button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">Ya tienes una cuenta? <Link href="/" className="text-green-400 hover:underline">Inicia Sessión</Link >
                        </div>
                    </form>
                </div>
            </main>
            {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
        </div>

    )
}


export default WithAuth(Home)