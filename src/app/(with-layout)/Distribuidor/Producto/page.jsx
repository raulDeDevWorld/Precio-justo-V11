'use client'


import Image from 'next/image'
import Link from 'next/link'
import style from '../../Medico.module.css'
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'
import Button from '../../../../components/Button'
import { useMask } from '@react-input/mask';


export default function Home() {
    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });


    return (


        <main className={style.main}>
            <form className={style.form} action="">
                <h3>Agregar Perfil</h3>
                <div className={style.perfil}>
                    <label htmlFor="file" >Subir Imagen</label>
                    <input id='file' type="file" />
                </div>
                <label htmlFor="">Nombre de la empresa</label>
                <Input type="text" />
                <label htmlFor="">Quienes somos</label>
                <Input type="text" />
                <label htmlFor="">Ciudad</label>

                <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} />


                <label htmlFor="">Dirección</label>
                <Input type="text" />
                <label htmlFor="">Dias de atención</label>

                <div className={style.checkbox}>
                    <input type="checkbox" id="L" name="L"/>
                    <label for="L">L</label>
                    <input type="checkbox" id="M" name="M"/>
                    <label for="M">M</label>
                    <input type="checkbox" id="M" name="M"/>
                    <label for="M">M</label>
                    <input type="checkbox" id="J" name="J"/>
                    <label for="J">J</label>
                    <input type="checkbox" id="V" name="V"/>
                    <label for="V">V</label>
                    <input type="checkbox" id="S" name="S"/>
                    <label for="S">S</label>
                    <input type="checkbox" id="D" name="D"/>
                    <label for="D">D</label>

                </div>
                <label htmlFor="">Horarios de Atención</label>
                <div className={style.box}>
                    <Input type="time" />
                    <Input type="time" />
                </div>



                <label htmlFor="">Numero de tarjeta</label>
                <Input type="text" reference={inputRefCard} styled={{ textAlign: 'center' }} />

                <div className={style.box}>
                    <div>
                        <label htmlFor="">Fecha</label>
                        <Input reference={inputRefDate} styled={{ textAlign: 'center' }} />
                    </div>
                    <div>
                        <label htmlFor="">CVC</label>
                        <Input reference={inputRefCVC} styled={{ textAlign: 'center' }} />
                    </div>
                </div>
                <label htmlFor="">Teléfono</label>
                <Input type="text" />
                <label htmlFor="">Whatsapp</label>
                <Input type="text" />

                <Button style='buttonSecondary'>Guardar</Button>
            </form>


        </main>


    )
}