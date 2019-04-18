import React, { Component } from 'react';
import { Header, MovieList, MovieDetails } from './components';

class App extends Component {

  // Déclaration du state
  constructor(props) {
    super(props);
    this.state = {
      // liste de films
      movies: [{
        title: 'Iron Man',
        img: 'https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL.jpg',
        details:'2 h 06 min | 30 avril 2008 | Action, aventure et science-fiction',
        description:`Tony Stark, inventeur de génie, vendeur d'armes et playboy milliardaire, est kidnappé en Aghanistan. Forcé par ses ravisseurs à fabriquer une arme redoutable, il construit en secret une armure high-tech révolutionnaire qu'il utilise pour s'échapper. Comprenant la puissance de cette armure, il décide de l'améliorer et de l'utiliser pour faire régner la justice et protéger les innocents.`
      },
      {
        title: `L'Incroyable Hulk`,
        img: 'https://images-na.ssl-images-amazon.com/images/I/416e7ph7tdL.jpg',
        details:'1 h 52 min | 13 juin 2008 | Action, avaenture et science-fiction',
        description:`Le scientifique Bruce Banner cherche désespérément un antidote aux radiations qui ont créé Hulk. Il vit dans l'ombre et parcourt la planète à la recherche d'un remède. La force destructrice de Hulk attire le Général Thaddeus E. Ross et son bras droit Blonsky qui rêvent de l'utiliser à des fins militaires. Ils tentent de développer un sérum pour créer des soldats surpuissants.`
      },
      {
        title: 'Thor',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91P1wWqX63L._SY550_.jpg',
        details:'1 h 55 min | 26 avril 2011 | Action, aventure et fantasy',
        description: `Au royaume d'Asgard, Thor est un guerrier aussi puissant qu'arrogant dont les actes téméraires déclenchent une guerre ancestrale. Banni et envoyé sur Terre, par son père Odin, il est condamné à vivre parmi les humains. Cependant, lorsque les forces du mal de son royaume s'apprêtent à se déchaîner sur la Terre, Thor va apprendre à se comporter en véritable héros.`
      },
      {
        title: 'Captain America : First Avenger',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51J0eYCJPoL.jpg',
        details:'2 h 04 min | 22 juillet 2011 | Action, aventure et science-fiction',
        description:`Steve Rogers, frêle et timide, se porte volontaire pour participer à un programme expérimental qui va le transformer en un super soldat connu sous le nom de Captain America.`
      },
    ],
       // le film sélèctionné initialisé à 0 c'est à dire sur le 1ier film de l'array movies
      selectedMovie: 0 
    }
  }

  // méthode qui permet de changer le selectedMovie
  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
      <Header />
      <div className="d-flex flex-row flex-fill pt-4 p-2">
        <MovieList movies={ this.state.movies } updateSelectedMovie={ this.updateSelectedMovie } />
        <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
      </div>
      </div>
    );
  }
}

export default App;
