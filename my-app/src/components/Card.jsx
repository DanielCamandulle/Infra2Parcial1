function Card(props) {
    const {children} = props
    return (
        <div>
           <h3> Hola {children}</h3>
           <p>Tu deporte favorito es : </p>
           <button onClick={props.onDelete}>Limpiar formulario</button>
        </div>
    )
}

export default Card