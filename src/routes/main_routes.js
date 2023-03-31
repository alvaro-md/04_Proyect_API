const routerMovies = require('./movies/index');


const routerMyApi = (app) => {
    app.use('/movies', routerMovies);
}

module.exports = routerMyApi;