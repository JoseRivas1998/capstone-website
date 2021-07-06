import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import PosterImage from './JoseDeJesus.RodriguezRivas-Poster.png';
import Poster from './JoseDeJesus.RodriguezRivas-Poster.ppt';
import {Helmet} from 'react-helmet';


class FinalPoster extends Component {
    render() {
        return (
            <Col>
                <Helmet>
                    <title>Final Poster – Tiny Country Games RPG Engine Capstone Project</title>
                </Helmet>
                <h1>Final Poster</h1>
                <hr/>
                <Image src={PosterImage} alt="Tiny Country Games RPG Engine Poster" fluid/>
                <a href={Poster}>JoseDeJesus.RodriguezRivas-Poster</a>
                <a href={Poster} className='btn btn-dark ml-2'>Download</a>
            </Col>
        );
    }
}

export default FinalPoster;
