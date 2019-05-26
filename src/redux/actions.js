import axios from 'axios';

const URL = 'https://swapi.co/api'

const filmesListLoad = () => {
    return dispatch =>
        axios.get(`${URL}/films/?format=json`)
            .then(respo => {

                respo.data.results.sort((a, b) => {
                    const c = a.episode_id;
                    const d = b.episode_id;
                    
                    let e = 0;
                    if (c > d) {
                      e = 1;
                    } else if (c < d) {
                      e = -1;
                    }
                    
                    return e;
                });

                console.log(respo.data.results)

                dispatch({
                    type: 'FILMESLIST_CHANGED',
                    payload: respo.data.results
                })
            });
}

export {
    filmesListLoad
};