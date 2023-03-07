import Paciente from "./Paciente"

function ListadoPacientes({pacientes,set_Paciente,eliminarPaciente}){


    return(
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
                {pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-blue-5 text-3xl text-center">Listado Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {""}
                            <span className="text-blue-500 font-bold"> Pacientes y Citas</span>
                        </p>
                        {pacientes.map( (paciente) => (
                            <Paciente
                            key = {paciente.id}
                            paciente = {paciente}
                            set_Paciente = {set_Paciente}
                            eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </>
                ): (
                    <>
                        <h2 className="font-blue-5 text-3xl text-center">No se han añadido Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza a agregar pacientes {""}
                            <span className="text-blue-500 font-bold"> para que salgan aqui</span>
                        </p>
                    </>
                )}


            </div>

    )
}
export default ListadoPacientes