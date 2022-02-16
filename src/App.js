import React from 'react'
import { Feature, Footer, Header, Navbar, Testimonials, Trending } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const App = () => {
  return (
    <Container>
        <Navbar />
        <Header />
        <Feature />
        <Testimonials />
        <Trending />
        <Footer />
    </Container>
  )
}

export default App
