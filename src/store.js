// Crea l'store de Reduce
// Guarda l'estat actual del nostre sistema

import {createStore} from 'redux';

// !!! per si volem fer servir redux-thunk
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// !!! per si volem fer servir redux-promise
// import promiseMiddleware from 'redux-promise';


// Import del dispathcer (reducer) de la nostra apliació
import reducer from './reducers/reducer';

// Creem el reducer
const store = createStore(
    reducer,

    // !!! per si volem fer servir redux-thunk
    // applyMiddleware(thunk) // Això ens serveix per aplicar el middleware thunk-redux a l'store

    // !!! per si volem fer servir redux-promise
    // applyMiddleware(promiseMiddleware)
);

export default store;

