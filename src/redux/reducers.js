const INITIAL_STATE = {
    filmes: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FILMESLIST_CHANGED':
            return { ...state, filmes: action.payload }
        default:
            return state;
    }
}