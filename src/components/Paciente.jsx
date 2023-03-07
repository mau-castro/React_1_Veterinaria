

const Paciente = ({paciente,set_Paciente,eliminarPaciente}) => {
    const {nombre,propietario,email,fecha,sintomas,id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente?")

        if(respuesta) {
            eliminarPaciente(id)
        }
    }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-500 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">Propietario: {""}
            <span className=" font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">Email: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">Fecha Alta: {""}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-500 uppercase">Síntomas: {""}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button type= "button" className="py-2 px-10 bg-blue-500 text-white font-bold rounded uppercase"
            onClick={() => set_Paciente(paciente)}
            >Editar</button>
            <button type= "button" className="py-2 px-10 bg-red-500 text-white font-bold rounded uppercase"
            onClick={handleEliminar}
            >Eliminar</button>
                
            
        </div>
    </div>
  )
}

export default Paciente