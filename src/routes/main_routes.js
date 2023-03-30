//const routerPokemon = require('./pokemons/index');
const routerMovies = require('./movies/index');
// const routerTrainers = require('../routes/traners/index');
// cities
// gyms

const routerMyApi = (app) => {
    app.use('/movie', routerMovies);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerMyApi;