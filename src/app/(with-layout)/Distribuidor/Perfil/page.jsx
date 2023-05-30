'use client'
import { readUserData } from '@/supabase/utils'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../../../../context/Context.js'
import Button from '../../../../components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import { WithAuth } from '@/HOCs/WithAuth'

function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()
    const [state, setState] = useState({})




    const redirectHandler = (ref) => {
        router.push(ref)
    }

    console.log(userDB !== undefined && userDB !== null && JSON.parse(userDB.Perfil['dias de atencion']))

    useEffect(() => {
        if (user && user.rol !== undefined) readUserData(user.rol, user.uuid, userDB, setUserData, 'Perfil', null )
    }, []);
    return (
        userDB !== undefined && userDB !== null ? <div className="min-h-[92vh] bg-white p-5">
            <br />
            <div className="flex justify-center">
                <img src="/business.svg" alt="" />
            </div>
            <br />
            <h3 className='w-full font-base  font-normal text-center '>{userDB.Perfil['nombre']}</h3>
            <h3 className='text-sm text-center text-emerald-400'>Abierto</h3>
            <br />
            <Subtitle>Quienes Somos</Subtitle>
            <Paragraph> {userDB.Perfil['descripcion']}</Paragraph>
            <div>
                <Subtitle>Dias de atención</Subtitle>
                <div className="flex justify-between">
                    <input type="checkbox" id="L" name="L" checked={JSON.parse(userDB.Perfil['dias de atencion'])['L'] ? true : false} readOnly />
                    <label htmlFor="L">L</label>
                    <input type="checkbox" id="M" name="M" checked={JSON.parse(userDB.Perfil['dias de atencion'])['M'] ? true : false} readOnly />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="M" name="Mi" checked={JSON.parse(userDB.Perfil['dias de atencion'])['Mi'] ? true : false} readOnly />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="J" name="J" checked={JSON.parse(userDB.Perfil['dias de atencion'])['J'] ? true : false} readOnly />
                    <label htmlFor="J">J</label>
                    <input type="checkbox" id="V" name="V" checked={JSON.parse(userDB.Perfil['dias de atencion'])['V'] ? true : false} readOnly />
                    <label htmlFor="V">V</label>
                    <input type="checkbox" id="S" name="S" checked={JSON.parse(userDB.Perfil['dias de atencion'])['S'] ? true : false} readOnly />
                    <label htmlFor="S">S</label>
                    <input type="checkbox" id="D" name="D" checked={JSON.parse(userDB.Perfil['dias de atencion'])['D'] ? true : false} readOnly />
                    <label htmlFor="D">D</label>
                </div>
            </div>
            <Subtitle>Horarios De Atención</Subtitle>
            <p className=''>{userDB.Perfil['horarios de apertura']} - {userDB.Perfil['horarios de cierre']}</p>
            <Subtitle>Categorias</Subtitle>
            <Subtitle>Contactos</Subtitle>
            <div className=''>
                <Paragraph> <img className="inline pr-5" src="/telefono.svg" alt="" />{userDB.Perfil['telefono']}</Paragraph>
                <Paragraph> <img className="inline pr-5" src="/ubicacion.svg" alt="" />{userDB.Perfil['direccion']}</Paragraph>
            </div>
            <br />
            <Button theme="Success">Ver Productos</Button>
            <img className="fixed bottom-5 right-5" src="/whatsapp.svg" alt="" />
        </div> :
            <div className="flex flex-col items-center justify-center h-[80vh]">
                <img src="/business.svg" alt="" />
                <br />
                <Button theme="Success" click={() => redirectHandler(`/${user.rol}`)}>Completa tu Perfil</Button>
            </div>
    )
}



export default WithAuth(Home)
