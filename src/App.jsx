import { useEffect, useState , usseEffect} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
function App() {
  //el js va a aqui
  const[pacientes,set_Pacientes] = useState([])
  const[paciente,set_Paciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      set_Pacientes(pacientesLS)
    }
    return obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    set_Pacientes(pacientesActualizados)
  }
  return (
    <div className="container mx-auto my-auto mt-auto">
      <Header
      />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes = {pacientes}
          set_Pacientes = {set_Pacientes}
          paciente={paciente}
          set_Paciente={set_Paciente}
          
        />
        <ListadoPacientes
          pacientes = {pacientes}
          set_Paciente ={set_Paciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
