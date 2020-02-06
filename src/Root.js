import React from 'react';
import App from './App';
import AboutPage from './AboutPage/AboutPage';
import FavoritePage from './FavoritePage/FavoritePage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch >
                <Route exact path="/" component={App}/>
                <Route path="/About" component={AboutPage}/>
                <Route path="/Favorite" component={FavoritePage} />
            </Switch>
        </Router>
    </Provider>
)

export default Root;