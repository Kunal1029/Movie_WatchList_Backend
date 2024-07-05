const express = require("express");
const webrouter = express.Router();
const moviesController = require('../controller/Controller');

// MoviesLists
webrouter.get('/', moviesController.getAllMovies);

// movie details
webrouter.get("/:id",moviesController.getOneMovie);

// insert new movie
webrouter.post("/",moviesController.insertMovie)

// edit and Update movie
webrouter.patch("/:id",moviesController.updateMovie)

// Delete any movie
webrouter.delete("/:id",moviesController.deleteMovie)


module.exports = webrouter;

