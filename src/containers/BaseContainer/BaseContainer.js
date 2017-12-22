import React, {PropTypes} from 'react';

import SearchContainer from "../SearchContainer/SearchContainer";
import Header from "../../components/Header/Header";

import {Link, IndexLink} from 'react-router';

class BaseContainer extends React.Component {

    /**
     * Només ha de renderitzar un component per defecte o el que rebi a través de l'atribut this.prop.children
     * Per defecte mostrem el search container
     *
     *  - {this.props.children || <SearchContainer/>} printa el contenidor / component de la ruta en qüestió
     *
     *  - Diferència entre IndexLink i Link és que s'activa quan concideix exactament amb "/"
     *    Compte, perq about és filla de "/", i si no fem servir el IndexLink amb "/", llavors
     *    la propietat activeClassName s'activaria també per "/" quan s'accedís a "about"
     *
     * @returns {XML}
     */
    render() {
        return <main className="container">
            <Header/>
            <nav className="Navigation">
                <IndexLink to="/" className="Link" activeClassName="Link--active">Home</IndexLink>
                <Link to="/about" className="Link" activeClassName="Link--active">About</Link>
            </nav>
            {this.props.children || <SearchContainer/>}
        </main>;
    }
}

export default BaseContainer;
