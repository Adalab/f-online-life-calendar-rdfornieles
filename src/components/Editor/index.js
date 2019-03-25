import React, { Component } from 'react';
import './Editor.scss';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Editor extends Component {

    render() {
        return (
            <section>
                <form>
                    <label className="input-date_title" htmlFor="date">Selecciona fecha</label>
                    <input
                        className="input-date"
                        id="date"
                        type="date"
                        value={this.props.date}
                        step="1"
                        onChange={this.props.changeDate}
                    />

                    <h2>¿Cuál es tu estado hoy?</h2>
                    <label className="input-face_title" htmlFor="happy-face">
                        <input
                            className="input-face"
                            id="happy-face"
                            type="checkbox"
                            value=":)"
                            name="faces"
                            onChange={this.props.changeFace}
                            checked={this.props.faces === ":)" ? true : false}
                        />
                        :)
                    </label>
                    <label className="input-face_title" htmlFor="sad-face">
                        <input
                            className="input-face"
                            id="sad-face"
                            type="checkbox"
                            value=":("
                            name="faces"
                            onChange={this.props.changeFace}
                            checked={this.props.faces === ":(" ? true : false}
                        />
                        :(
                    </label>
                    <label className="input-message_title" htmlFor="message">Mensaje</label>
                    <input
                        className="input-message"
                        placeholder="Deja aquí tu mensaje..."
                        type="text"
                        name="message"
                        value={this.props.messageValue}
                        onChange={this.props.message}
                    />
                    <input
                        type="submit"
                        value="Guardar"
                        onClick={this.props.saveInfo}></input>

                    <input type="submit" value="Cancelar" />
                    <Link to="/">
                        <div>Calendario</div>
                    </Link>
                </form>
            </section>
        );
    }
}

export default Editor;