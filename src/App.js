import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loading, SearchBar,   } from './components';
import apiMovie, { apiMovieMap } from './conf/apiMovie';
import GithubCorner from 'react-github-corner';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }

  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(response => response.data.results)
      .then(moviesApi => {
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch(err => console.log(err));
  }

  updateMovies = (movies) => {
    console.log(movies)
    this.setState({
      movies,
      loaded: true
    })
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column" >
      
        <Header />
        <GithubCorner />
        <SearchBar updateMovies={this.updateMovies} />
        {this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2" >
            <MovieList
              movies={this.state.movies}
              updateSelectedMovie={this.updateSelectedMovie} />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
            <GithubCorner href="https://github.com/sandix34/Atelier-React" />
          </div>
        ) : (
            <Loading />
          )}
      </div>
    );
  }
}

export default App;
