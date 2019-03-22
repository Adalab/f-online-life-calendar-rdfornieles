import React, { Component } from 'react';
import './Editor.scss';
import PropTypes from "prop-types";

class Editor extends Component {
    
    render() { 
        return ( 
            <section>
                <form>
                    <label className= "input-date_title" htmlFor= "date">Selecciona fecha</label>
                    <input
                    className= "input-date"
                    id= "date"
                    type= "date"
                    value= "2019/03/22" />
                    <h2>¿Cuál es tu estado hoy?</h2>
                    <label className= "input-face_title" htmlFor="happy-face">
                    <input 
                    className= "input-face"
                    id= "happy-face"
                    type= "checkbox"
                    value= "happy"
                    name= "faces"
                    />
                    :)
                    </label>
                    <label className= "input-face_title" htmlFor="sad-face">
                    <input 
                    className= "input-face"
                    id= "sad-face"
                    type= "checkbox"
                    value= "sad"
                    name= "faces"
                    />
                    :(
                    </label>
                    <label className= "input-message_title" htmlFor= "message">Mensaje</label>
                    <input
                    className= "input-message"
                    placeholder="Deja aquí tu mensaje..."
                    type= "text"
                    name= "message"
                    value= ""
                    />
                    <input type="submit" value="Guardar"></input>
                    <input type="submit" value="Cancelar" />
                </form>
            </section>
         );
    }
}
 
export default Editor;