//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { BrowserRouter as Router } from 'react-router-dom';

//> Components
// The footer of the webpage
import Footer from './components/molecules/Footer';
// The navigation bar of the webpage
import Navbar from './components/molecules/Navbar';
// Routes
import Routes from './Routes';

class App extends React.Component {
 
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar />
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
