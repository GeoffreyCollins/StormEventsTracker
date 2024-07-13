import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import FatalitiesPage from './components/FatalitiesPage';
import LocationsPage from './components/LocationsPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/fatalities" element={<FatalitiesPage />} />
                <Route path="/locations" element={<LocationsPage />} />
            </Switch>
        </Router>
    );
};

export default Routes;