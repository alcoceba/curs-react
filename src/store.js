// Crea l'store de Reduce
// Guarda l'estat actual del nostre sistema

import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';


// Import del dispathcer (reducer) de la nostra apliació
import reducer from './reducers/reducer';

// Creem el reducer
const store = createStore(
    reducer,
    applyMiddleware(promiseMiddleware)
);

export default store;

