// React
import React from 'react';

// React router
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Footer from './components/molecules/Footer';
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
