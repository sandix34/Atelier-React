import React, { Component } from 'react';
import { Header } from './components';
import apiMovie, { apiMovieMap } from './conf/apiMovie';
import Films from './features/films'
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
        <Films
          loaded={ this.state.loaded }
          updateMovies={ this.updateMovies }
          updateSelectedMovie={ this.updateSelectedMovie }
          movies={ this.state.movies }
          selectedMovie={ this.state.selectedMovie }
        />
      </div>
    );
  }
}

export default App;
