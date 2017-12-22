// Aqui definim les accions de l'aplicació
// Ens permeten emetre diferents accions a l'store

export const startSearch = search => {
    return {
        type: 'SEARCH_START',
        search
    };
};

export const successSearch = results => {
    return {
        type: 'SEARCH_SUCCESS',
        results
    };
};


// En lloc de retonrar un objecte pla, el que fem és retornar una funció que rep el paràmetre dispatch
export const searchRepositories = value => dispatch => {

    // !!! tota la lògica que tenim al search container la movem aquí

    // En cas de fer servir l'store, cridem l'start search amb el valor que volem buscar
    dispatch(startSearch(value));

    // Llegim dades del servidor fent servir FETCH
    fetch(`https://api.github.com/search/repositories?q=${ value }`)
        .then(res => res.json())
        .then(res => {
            // Passem les dades rebudes al nostre dispatch
            console.log(res.items);
             dispatch(successSearch(res.items));
        })
        .catch(err => {
            // Mostrem error per consola si n'hi ha
            console.log(err);
        });

};


