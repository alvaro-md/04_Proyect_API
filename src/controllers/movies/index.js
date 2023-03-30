const movieServices= require('../../services/movies/index');
const movieService = new movieServices();

const getMovies = async (req, res) => {
    try {
      // console.log(pokemonService.queryAll()) // Promise.pending
      const movies = await movieService.queryAll();
      res.status(200).json(movies);
    } catch(error) {
      res.status(404).json( { message: 'No movies found' } );
    }
}

const getMoviesById = async (req, res) => {
  try {
    const id = req.params.id;
    const findMovie = await moviesService.getById(id);
    res.status(200).json(findMovie);
  } catch(error) {
    res.status(404).json( { message: 'Movie not found' } )
  }
}

const addMovie = (req, res) => {
  try {
    const newMovie = req.body;
    moviesService.createPokemon(newMovie);
    res.status(201).send();
  } catch(error) {
    res.status(500).json( { message: 'Fatal error' } )
  }
}

const editPartial = (req, res) => {

}

const editComplete = (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    moviesService.editComplete(id, movie);
    res.status(200).send();
  } catch(error) {
    res.status(404).json( { message: 'error to complete edit' } )
  }
}

const deleteMovie = (req, res) => {

}

module.exports = {
    getMovies,
    getMoviesById,
    addMovie,
    editPartial,
    editComplete,
    deleteMovie,
}