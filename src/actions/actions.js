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

