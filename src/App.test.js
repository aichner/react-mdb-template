//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// This serves as an entry point to the DOM and server renderers for React
import ReactDOM from 'react-dom';

//> Components
// Root component
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
