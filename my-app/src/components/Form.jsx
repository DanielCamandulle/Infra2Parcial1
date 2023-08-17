import { useState } from "react"

function Form(props) {

    const [nombre, setNombre] = useState('') 
    const [deporte, setDeporte] = useState('')     
    const [mensaje, setMensaje] = useState('')
    function validacion(event){
        event.preventDefault()
        if (nombre.trim() !== '' && nombre.length > 2 && deporte.trim() !== '' && deporte.length > 5){
            props.onNombre(nombre)
            setMensaje('')        
        }else {
            setMensaje('“Por favor chequea que la información sea correcta”')
        }
        
    }

    return (
        <form 
            onSubmit={validacion}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                }}
        >
            <label htmlFor="nombre">Ingresa tu nombre</label>
            <input 
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
            />
            <label htmlFor="deporte">Ingresa tu deporte favorito</label>
            <input 
                type="text"
                id="deporte"
                value={deporte}
                onChange={(e) => setDeporte(e.target.value)} 
            />
            {mensaje ? <div>{mensaje}</div> : undefined}
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form