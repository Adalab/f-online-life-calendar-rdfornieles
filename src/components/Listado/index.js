import React, { Component } from 'react';
import "./Listado.scss";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Listado extends Component {

    render() {
        return (
            <section>
                <Link>
                    <div> + </div>
                </Link>
                <div>
                    <ul></ul>
                </div>

            </section>
        );
    }
}

export default Listado;