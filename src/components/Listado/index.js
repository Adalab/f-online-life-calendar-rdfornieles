import React, { Component } from 'react';
import "./Listado.scss";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Listado extends Component {
    
    render() {
        console.log("nnnnnn", this.props.listFaces)
        return (
            <section>
                <Link to= "/editor">
                    <div> + </div>
                </Link>
                <div>
                    <ul>
                        {/* {this.props.listFaces.map((item, index) => {
                            return (
                                <li key={index}>
                                <div>{item.userFaces}</div>
                                <div>{item.userDate}</div>
                                <div>{item.userMessage}</div>
                                </li>
                            )
                        })} */}
                    </ul>
                </div>

            </section>
        );
    }
}

export default Listado;