import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  const [elNombre, setElNombre] = useState()
  const [elDeporte, setElDeporte] = useState('')
  
  function handleSubmit(nombre, deporte) {
    setElNombre(nombre)
    setElDeporte(deporte)
  }

  function handleDelete() {
    setElNombre()
    setElDeporte()
  }
  return (
    <>
      <Form onNombre={handleSubmit}/>
      {elNombre ? <Card onDelete={handleDelete}>
        {elNombre} 
        </Card>: undefined}
        {elDeporte ? <Card onDelete={handleDelete}>
        {elDeporte} 
        </Card>: undefined}
      
        
    </>
  )
}

export default App
