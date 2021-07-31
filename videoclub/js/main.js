let renderMovies = movies => {
    for(let movie of movies) {
        document.querySelector('.peliculas').innerHTML+=`
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="">
            <h4>${movie.title}</h4>
        </div>
        `
    }
}

let getPopularMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b87173a0264738f1aca5ecf47c73157&language=es-ES')
    .then(res=>res.json())
    .then(res=> {
        const pelis = res.results;
        renderMovies(pelis);
    })
    .catch(error=>console.error(error))
}