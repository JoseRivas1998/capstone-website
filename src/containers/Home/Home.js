import React, {Component} from 'react';
import {Col, ResponsiveEmbed} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

class Home extends Component {

    render() {
        return (
            <Col>
                <Helmet>
                    <title>Tiny Country Games RPG Engine Capstone Project</title>
                </Helmet>
                <h1>Tiny Country Games RPG Engine</h1>
                <hr/>
                <h2>
                    Created by Jose de Jesus Rodriguez Rivas<br/>
                    <small>Computer Science Capstone Class of 2021</small>
                </h2>
                <p>
                    The Tiny Country Games RPG Engine is a desktop application that allows users to create JRPG
                    games without any previous coding experience. The project was largely inspired by the <a
                    href="https://www.rpgmakerweb.com/"> RPG Maker Series</a>. The goal of the project was for
                    the application to be as easy to use as
                    possible, without sacrificing flexibility. The idea was that if a beginner wanted to make a
                    game, they could easily, and if a more experienced developer wanted to make a more complex
                    game, they could use this tool as well. The capstone project was to begin a significant
                    portion of this application.
                </p>
                <ResponsiveEmbed aspectRatio="16by9">
                    <iframe
                        src="https://www.youtube.com/embed/ULRLkPKnYDI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                </ResponsiveEmbed>
            </Col>
        );
    }

}

export default Home;
