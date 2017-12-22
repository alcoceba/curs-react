// Crea l'store de Reduce
// Guarda l'estat actual del nostre sistema

import {createStore} from 'redux';

// Import del dispathcer (reducer) de la nostra apliació
import reducer from './reducers/reducer';

// Creem el reducer
const store = createStore(reducer);

export default store;

