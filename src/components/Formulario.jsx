import React from 'react'
import Header from './Header'
import {useState,useEffect} from "react"
import Error_mensaje from './Error_mensaje'
function Formulario({pacientes, set_Pacientes,paciente,set_Paciente}) {
    const [nombre, set_Nombre] = useState("");
    const [propietario, set_Propietario] = useState("");
    const [email, set_Email] = useState("");
    const [fecha, set_Fecha] = useState("");
    const [sintomas, set_Sintomas] = useState("");
    const [error, set_Error] = useState(false);
    useEffect(() =>{
       if( Object.keys(paciente).length > 0){
            set_Nombre(paciente.nombre)
            set_Propietario(paciente.propietario)
            set_Email(paciente.email)
            set_Fecha(paciente.fecha)
            set_Sintomas(paciente.sintomas)
       }
    }, [paciente])
    

    const generarid = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return  fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validacion del formulario
        if([nombre,propietario,email,fecha,sintomas].includes("")){
            set_Error(true)
        }else{
            set_Error(false)
            //Objeto de paciente
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
            }

            if(paciente.id){
                //Editando el Regitrso
                objetoPaciente.id = paciente.id

                const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === 
                    paciente.id ? objetoPaciente : pacienteState )
                set_Pacientes(pacientesActualizados)
                set_Paciente({})
            } else{
                //Nuevo registro
                objetoPaciente.id = generarid()
                set_Pacientes([...pacientes, objetoPaciente])
            }


            //REINICIAR FORM
            set_Email("")
            set_Propietario("")
            set_Nombre("")
            set_Sintomas("")
            set_Fecha("")
        }
    }
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl'>Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {""}
            <span className="text-blue-500 font-bold ">Administralos</span>
        </p>
        <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'>
            {error && <Error_mensaje ><p className='text-centered'>Todos los campos son obligatorios</p></Error_mensaje> }
            <div>
                <label htmlFor='mascota' className='block text-black uppercase font-bold'>Nombre Mascota</label>

                <input 
                id="mascota"
                type="text" 
                placeholder='Nombre de la mascota' 
                className='border-2 w-full p-2 mt-2 placeholder-blue-200 rounded-md'
                value={nombre}
                onChange ={ (e) => set_Nombre(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='dueno' className='block text-black uppercase font-bold mt-4'>Nombre Propietario</label>

                <input 
                id="dueno"
                type="text" 
                placeholder='Nombre del Propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-blue-200 rounded-md'
                value={propietario}
                onChange ={ (e) => set_Propietario(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='email' className='block text-black uppercase font-bold mt-4'>Email</label>

                <input 
                id="email"
                type="email" 
                placeholder='Email Contacto Propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-blue-200 rounded-md'
                value={email}
                onChange ={ (e) => set_Email(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='Alta' className='block text-black uppercase font-bold mt-4'>Alta</label>

                <input 
                id="Alta"
                type="date" 
                className='border-2 w-full p-2 mt-2 placeholder-blue-200 rounded-md'
                value={fecha}
                onChange ={ (e) => set_Fecha(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='sintomas' className='block text-black uppercase font-bold mt-4'>Síntomas</label>
                    <textarea
                        id="sintomas"
                        className='border-2 w-full p-2 mt-2 placeholder-blue-200 rounded-md mb-10'
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange ={ (e) => set_Sintomas(e.target.value)}
                    />

            </div>

            <input
                type="submit"
                className="bg-blue-500 w-full p-3 text-white uppsercase font-bold  hover:bg-blue-800 cursor-pointer transition-all"
                value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            />
        </form>
    </div>
  )
}

export default Formulario