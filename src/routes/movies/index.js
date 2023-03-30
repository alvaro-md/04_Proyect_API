const express = require('express');
const {  getMovies, getMoviesById, addMovie, editPartial, editComplete, deleteMovie} = require('../../controllers/movies/index')
const moviesRouter = express.Router();

// getAll
moviesRouter.get('/', getMovies);

// getById
moviesRouter.get('/:id/', getMoviesById);

// create
moviesRouter.post('/', addMovie);

// editPartial
moviesRouter.patch('/:id', editPartial);

// editComplete
moviesRouter.put('/:id', editComplete);

// delete
moviesRouter.delete('/:id', deleteMovie);

module.exports = moviesRouter;