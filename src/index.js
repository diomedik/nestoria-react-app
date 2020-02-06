import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/reducer';
import Root from './Root';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Root store={store}/>,document.getElementById('root'));


serviceWorker.unregister();
