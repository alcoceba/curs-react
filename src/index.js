// Styles
import './index.css';

// Llibreries
import React from 'react';
import ReactDOM from 'react-dom';

// Redux, Provider importa les diferents funcionalitats de redux
import {Provider} from 'react-redux';
import store from './store';

// Rutes
import {Router, Route, hashHistory} from 'react-router';

// Components
import BaseContainer from './containers/BaseContainer';
import DetailsContainers from './containers/DetailsContainer';
import About from './components/About';

// Definim Provider per integrear l'store a la nostra aplicació
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={BaseContainer}>
                <Route path="/:user/:repo" component={DetailsContainers}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
