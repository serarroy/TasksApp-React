import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); /*Valor del campo de texto*/
    }

    const manejarEnvio = e =>{
        e.preventDefault(); // Evita que se cargue la pagina al enviar el form
        const tareaNueva = {
            id: uuidv4(), /* genera id unico*/
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }



    return (
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Introduzca una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
};

export default TareaFormulario;