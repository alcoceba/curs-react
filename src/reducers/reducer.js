// Definim l'estat acutal del nostre projecte, és a dir, les dades inicials de search
const initialState = {
    loading: false,
    results: [],
    search: '', // Terme e buscar
    queried: false // Indica si hem fet cerca previa
};


// El reducer (dispatcher) és una funció que rep varis paràmetres
// Rep l'state i la funció que volem executar sobre l'store
// A la primera iteració l'estat inicial serà nul, per tant fem que per defecte sigui
// el que hem definit com a estat inicial
const reducer = (state = initialState, action) => {

    // Quina acció hem de dur a terme sobre l'store
    switch (action.type) {

        // Busca un nou element
        case 'SEARCH_START':
            return Object.assign({}, state, {
                loading: true,
                search: action.search
            });

        // Cerca completada
        case 'SEARCH_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                results: action.results,
                queried: true // l'aixequem ja que hem completat una crida
            });

        // !!! per si volem fer servir el redux-promise
        /*
        case 'SEARCH':
            // Fem servir el payload definit a actions
            // en cas que hi hagi un error, el tindrem en el flag d'error
            return Object.assign({}, state, {
                loading: false,
                results: !action.error ? action.payload : [],
                queried: true // l'aixequem ja que hem completat una crida
            });
        */

        // Per defecte retornem l'estat, mai pot retonrar nul, sinó donarà comportaments estranys a l'aplicació
        default:
            return state;
    }
};

export default reducer;