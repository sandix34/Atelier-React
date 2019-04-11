import React, { Component } from 'react';

export default class MovieElement extends Component {

    render() {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcQRldT4RKBlDSiPcwHAZbLAUNqsGCatYti-CLyeCxCsG9iADdMq" alt="film" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">AVENGERS</h5>
                        <p className="card-text">Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix dans le monde, veut former une équipe d'irréductibles pour empêcher la destruction du monde. Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.</p>
                    </div>
                </div>
            </div>
        );
    }
}