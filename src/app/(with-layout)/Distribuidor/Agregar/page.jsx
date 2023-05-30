'use client'
import { writeUserData, readUserData } from '@/supabase/utils'
import { useState } from 'react'
import { useUser } from '@/context/Context.js'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Label from '@/components/Label'
import Checkbox from '@/components/Checkbox'


import Button from '@/components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';
import { WithAuth } from '@/HOCs/WithAuth'


function Home() {
    const router = useRouter()

    const { user, userDB, setUserData, setUserSuccess } = useUser()
    const [state, setState] = useState({})

    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });
    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const inputRefPhone = useMask({ mask: '+ 591 _ ___ ___', replacement: { _: /\d/ } });
    const inputRefWhatsApp = useMask({ mask: '+ 591 __ ___ ___', replacement: { _: /\d/ } });

    function onChangeHandler(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    function onChangeHandlerCheck(e) {
        setState({ ...state, ['dias de atencion']: { ...state['dias de atencion'], [e.target.name]: e.target.checked } })
    }
    function onClickHandler(name, value) {
        setState({ ...state, [name]: value })
    }
    function save(e) {
        e.preventDefault()
        writeUserData('Distribuidores', { ...state, uuid: user.uuid }, user.uuid, userDB, setUserData, setUserSuccess, 'Se ha guardado correctamente', 'Perfil')
        router.push('/Distribuidor/Perfil')
    }

    console.log(user)










    return (
        <form >
            <h3 className='text-center pb-3'>Agregar Procucto</h3>
            <div className="w-full flex justify-center">
                <label htmlFor="file" className="block flex justify-center items-center w-[100px] h-[100px] bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 rounded-[100px]" >Subir Imagen</label>
                <input className="hidden" id='file' type="file" />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">

                <div>
                    <Label htmlFor="">Nombre de la empresa</Label>
                    <Input type="text" name="nombre" onChange={onChangeHandler} />
                </div>

                <div>
                    <Label htmlFor="">Descripción</Label>
                    <Input type="text" name="descripcion" onChange={onChangeHandler} />
                </div>


                <div>
                <Label htmlFor="">Disponibilidad</Label>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                </div>
                <div>
                    <Label htmlFor="">Costo</Label>
                    <Input type="text" name="numero de tarjeta" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                </div>
            </div>
            <div className='flex w-full justify-around'>
                <Button theme='Success' >Ver Vista Cliente</Button>
                <Button theme='Primary' click={save}>Guardar</Button>
            </div>
        </form>
    )
}


export default WithAuth(Home)