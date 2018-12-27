import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import 'holderjs';

import NavbarApp from './components/NavbarApp'
import Footer from './components/Footer'
import CarouselApp from './components/CarouselApp'
import MarketingAndFeatures from './section/MarketingAndFeatures'

class App extends Component {
  render() {
    return (
      <div>
      <header>
         <NavbarApp />
      </header>
      <main role="main">
        <CarouselApp />
        <MarketingAndFeatures />
      </main>
      <Footer />
      </div>
    );
  }
}

export default App;