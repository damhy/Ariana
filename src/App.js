
import React, { Component } from 'react'
import './resources/styles.css';
import Featured from '../src/components/featured'
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Header from './components/header_footer/Header';
import VenueNfo from './components/venuenfo';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import {Element} from 'react-scroll';

 class App extends Component {
  render() {
    return (
      <div style={{height:"1500px"}}>
        <Element name="Featured">  <Featured /></Element>
      
     <Header />
        <Element name="Venue NFO"><VenueNfo /></Element>
        
        <Element name="Highlights"><Highlights /></Element>
        
        <Element name="Pricing"><Pricing /></Element>
        
        <Element name="Location"><Location /></Element>
        
        <Footer />
        
      </div>
    )
  }
}
export default App ;