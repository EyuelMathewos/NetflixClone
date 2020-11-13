export const UPDATEMOVIES = "UPDATEMOVIES";
const updateMovies = (movies)=>({
    type: 'UPDATEMOVIES',
    payload: movies
});

export default updateMovies;