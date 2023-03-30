class MovieServices {

    constructor() {
        this.movies = [];
        // dummy o codigo en duro, simular los datos
        this.generateData();
    }

    generateData() {
        this.movies = [
            { id: 1, title: 'bulbasaur', genre: 'grass', releaseYear: '2000', director: 'john', producer:'' },
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