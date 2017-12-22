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

    // !!!
    // !!! Això no ens cal quan fem servir l'store del redux
    // !!! El que hem de fer es modificar de l'state als props, que és on tindrem les dades de l'store
    // !!!
    //
    // constructor(props) {
    //
    //     // No oblidar posar-ho
    //     super(props);
    //
    //     // Realitzem el bind del mètode on submit
    //     this.onSubmit = this.onSubmit.bind(this);
    //
    //     // Definim un state
    //     this.state = {
    //         loading: false,
    //         results: [],
    //         search: '', // Terme e buscar
    //         queried: false // Indica si hem fet cerca previa
    //     };
    // }

    constructor(props) {

        // No oblidar posar-ho
        super(props);

        // Realitzem el bind del mètode on submit
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
     * la API.
     */
    stubData() {

        let repo = {
            full_name: 'My Repository',
            owner: {
                login: 'Manel',
                avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
                html_url: 'https://github.com/Angelmmiguel'
            },
            stargazers_count: 10,
            forks_count: 5
        };

        return [
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo)
        ]
    }

    /**
     * Per quan fem el submit
     * @param value
     */
    onSubmit(value) {

        // !!!
        // !!! Això no ens cal quan fem servir l'store del redux
        // !!! El que hem de fer es modificar de l'state als props, que és on tindrem les dades de l'store
        // !!!
        //
        // // Per mostar el loader per exemple
        // this.setState({
        //     loading: true,
        //     search: value
        // });
        //
        // setTimeout(() => {
        //     this.setState({
        //         loading: false,
        //         queried: true,
        //         results: this.stubData()
        //     });
        // }, 2000)

        // Emulem dades a una API
        // setTimeout(() => {
        //    this.props.dispatch(successSearch(this.stubData()));
        // }, 2000)


        // !!! En cas de voler fer servir redux-thunk
        // this.props.dispatch(searchRepositories(value));

        // !!! En cas de voler fer servir redux-promise, no ens podem carregarel startSearch en aquest cas
        // com sí que passa amb el redux-thunk
        // this.props.dispatch(searchRepositories(value));

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

        // !!!
        // !!! Això no ens cal quan fem servir l'store del redux
        // !!! El que hem de fer es modificar de l'state als props, que és on tindrem les dades de l'store
        // !!!
        //
        // return <main className="container">
        //     <SearchForm onSubmit={this.onSubmit} search={this.state.search}/>
        //     <RepositoryList
        //         data={this.state.results} search={this.state.search}
        //         loading={this.state.loading} queried={this.state.queried}/>
        // </main>;

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
