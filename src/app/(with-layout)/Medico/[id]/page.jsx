'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../../../../context/Context.js'
import Button from '../../../../components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'

export default function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()
    const [state, setState] = useState({})

    return (
        <div className="min-h-[92vh] bg-white p-5">
            <br />
            <div className="flex justify-center">
                <img src="/business.svg" alt="" />
            </div>
            <br />
            <h3 className='w-full font-base  font-normal text-center '>{userDB['Nombre']}</h3>
            <h3 className='text-sm text-center text-emerald-400'>Abierto</h3>
            <br />
            <Subtitle>Quienes Somos</Subtitle>
            <Paragraph> {userDB['Descripcion']}</Paragraph>
            <div>
                <Subtitle>Dias de atención</Subtitle>
                <div className="flex justify-between">
                    <input type="checkbox" id="L" name="L" checked={userDB['L'] ? true : false} readOnly />
                    <label htmlFor="L">L</label>
                    <input type="checkbox" id="M" name="M" checked={userDB['M'] ? true : false} readOnly />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="M" name="Mi" checked={userDB['Mi'] ? true : false} readOnly />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="J" name="J" checked={userDB['J'] ? true : false} readOnly />
                    <label htmlFor="J">J</label>
                    <input type="checkbox" id="V" name="V" checked={userDB['V'] ? true : false} readOnly />
                    <label htmlFor="V">V</label>
                    <input type="checkbox" id="S" name="S" checked={userDB['S'] ? true : false} readOnly />
                    <label htmlFor="S">S</label>
                    <input type="checkbox" id="D" name="D" checked={userDB['D'] ? true : false} readOnly />
                    <label htmlFor="D">D</label>
                </div>
            </div>
            <Subtitle>Horarios De Atención</Subtitle>
            <p className=''>{userDB['timeInit']} - {userDB['timeFinish']}</p>
            <Subtitle>Categorias</Subtitle>
            <Subtitle>Contactos</Subtitle>
            <div className=''>
                <Paragraph> <img className="inline pr-5" src="/telefono.svg" alt="" />{userDB['Telefono']}</Paragraph>
                <Paragraph> <img className="inline pr-5" src="/ubicacion.svg" alt="" />{userDB['Direccion']}</Paragraph>
            </div>
            <br />
            <Button theme="Success">Ver Productos</Button>
            <img className="fixed bottom-5 right-5" src="/whatsapp.svg" alt="" />
        </div>
    )
}