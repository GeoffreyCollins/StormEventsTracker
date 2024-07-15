import React from 'react';
import WeatherForm from '../WeatherForm';
import LocationList from '../Lists/LocationList';

const LocationsPage = () => {
    return (
        <div>
            <h1>Storm Locations</h1>
            <WeatherForm />
            <LocationList />
        </div>
    );
};

export default LocationsPage;