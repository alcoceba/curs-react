// Crea l'store de Reduce
// Guarda l'estat actual del nostre sistema

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


// Import del dispathcer (reducer) de la nostra apliació
import reducer from './reducers/reducer';

// Creem el reducer
const store = createStore(
    reducer,
    applyMiddleware(thunk) // Això ens serveix per aplicar el middleware thunk-redux a l'store
);

export default store;

