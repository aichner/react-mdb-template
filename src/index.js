// React
import React from 'react';

// React Dom
import ReactDOM from 'react-dom';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Pure Bootstrap
import 'bootstrap-css-only/css/bootstrap.min.css';

// MDB
import 'mdbreact/dist/css/mdb.css';

// Root SCSS file
import './index.scss';

// Root component
import App from './App';

import registerServiceWorker from './registerServiceWorker';

// Render the root component to <div id="root"></div>
ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
