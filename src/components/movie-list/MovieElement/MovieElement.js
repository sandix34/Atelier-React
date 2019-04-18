import React, { Component } from 'react';
import styles from './MovieElement.module.scss';

export default class MovieElement extends Component {

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (
            // écoute l'évènement
            <div onMouseEnter={ this.mouseEnter } className={ "d-flex flex-row bg-light " + styles.container }>
                <img width="150" height="200" src={ this.props.movie.img} alt="film"/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ this.props.movie.title}</h5>
                    <hr className="w-100"/>
                    <p>{ this.props.movie.details}</p>
                </div>
            </div>
        );
    }
}