import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/Pages/DetailsPage';
import FatalitiesPage from './components/Pages/FatalitiesPage';
import LocationsPage from './components/Pages/LocationsPage';

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