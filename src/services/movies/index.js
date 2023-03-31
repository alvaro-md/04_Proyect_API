class MovieServices {

    constructor() {
        this.movies = [];
        // dummy o codigo en duro, simular los datos
        this.generateData();
    }

    generateData() {
        this.movies = [
            { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: '1994', director: 'Frank Darabont', writer:'Stephen King' },
            { id: 2, title: 'The Godfather', genre: 'Drama', releaseYear: '1972', director: 'Francis Ford Coppola', writer:'Mario Puzo' },
            { id: 3, title: 'The Dark Knight', genre: 'Action', releaseYear: '2008', director: 'Christopher Nolan', writer:'Jonathan Nolan' },
            { id: 4, title: 'The Godfather Part II', genre: 'Drama', releaseYear: '1974', director: 'Francis Ford Coppola', writer:'Mario Puzo' },
            { id: 5, title: '12 Angry Men', genre: 'Drama', releaseYear: '1957', director: 'Sidney Lumet', writer:'Reginald Rose' }
        ];
    }

    createMovie(newMovie){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.movies.push(newMovie);
                resolve(); 
            }, 1000);
        });
    }

    queryAll(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.movies); // try
                // reject catch
            }, 1000);
        });
    }

    getById(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findMovie = this.movies.filter(movie => movie.id === parseInt(id) )[0];
                resolve(findMovie);
            }, 1000);
        });
    }

    editComplete(id, movie){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.movies.findIndex(movie => movie.id === parseInt(id));
                this.movies[index] = movie;
                resolve();
            }, 1000);
        });
    }

    deleteMovie(){

    }

}

module.exports = MovieServices;