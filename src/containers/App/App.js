import React, {Component} from 'react';

import Navbar from '../../components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

import Home from '../Home/Home';
import FinalPoster from '../FinalPoster/FinalPoster';
import TestimonialEssay from '../TestimonialEssay/TestimonialEssay';

class App extends Component{

  render() {
    return (
        <>
            <Navbar/>
            <Container className="mt-5 mb-5">
                <Row>
                    <Switch>
                        <Route path="/final-poster" component={FinalPoster}/>
                        <Route path="/testimonial-essay" component={TestimonialEssay}/>
                        <Route path="/" component={Home} />
                    </Switch>
                </Row>
            </Container>
        </>
    );
  }
}

export default App;
