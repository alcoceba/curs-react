import React, {PropTypes} from 'react';
import SearchForm from "../../components/SearchForm/SearchForm";
import RepositoryList from "../../components/RepositoryList/RepositoryList";

// Actions que hem definit pel redux
import {startSearch, successSearch} from "../../actions/actions";

// React-redux connect és de tipus HOC
import {connect} from 'react-redux';

/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {

    constructor(props) {

        // No oblidar posar-ho
        super(props);

        // Realitzem el bind del mètode on submit
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Per quan fem el submit
     * @param value
     */
    onSubmit(value) {

        // En cas de fer servir l'store, cridem l'start search amb el valor que volem buscar
        this.props.dispatch(startSearch(value));

        // Llegim dades del servidor fent servir FETCH
        fetch(`https://api.github.com/search/repositories?q=${ value }`)
            .then(res => res.json())
            .then(res => {
                // Passem les dades rebudes al nostre dispatch
                console.log(res.items);
                this.props.dispatch(successSearch(res.items));
            })
            .catch(err => {
                // Mostrem error per consola si n'hi ha
                console.log(err);
            });

    }

    /**
     * Render the SearchContainer component
     */
    render() {

        // Canviem els this.states per this.props en el cas de fer servir l'store
        return <main className="container">
            <SearchForm onSubmit={this.onSubmit} search={this.props.search}/>
            <RepositoryList
                data={this.props.results} search={this.props.search}
                loading={this.props.loading} queried={this.props.queried}/>
        </main>;
    }
}

// Per recuperar les dades de l'store si fem click enrere, per exemple
const mapStateToProps = state => {
    let {search, loading, results, queried} = state;
    return {search, loading, results, queried};
};

// Exportem
export default connect(mapStateToProps)(SearchContainer);
