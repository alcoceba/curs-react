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

export const searchRepositories = value => {
    return {
        type: 'SEARCH',
        // Hi tenim una promesa que resol les dades aquí
        // En cas de donar error s'aixeca un flag d'error
        payload: fetch(`https://api.github.com/search/repositories?q=${ value }`)
            .then(res => res.json())
            .then(res => res.items)
    };
};
