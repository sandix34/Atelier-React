import React, { Component } from 'react';

export default class MovieElement extends Component {

    render() {
        return (
            <div className="w-50 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" src="http://t1.gstatic.com/images?q=tbn:ANd9GcQRldT4RKBlDSiPcwHAZbLAUNqsGCatYti-CLyeCxCsG9iADdMq" alt="film"/>
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>Titre</h5>
                        <hr className="w-100"/>
                        <p>Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix dans le monde, veut former une équipe d'irréductibles pour empêcher la destruction du monde. Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.</p>
                    </div>
                </div>
            </div>
        );
    }
}