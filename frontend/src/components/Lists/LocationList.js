import React, { useContext } from 'react';
import { LocationContext } from '../../context/LocationContext';

const LocationList = () => {
    const { locations } = useContext(LocationContext);

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {locations.map(location => (
                    <li key={location._id}>
                        {location.LOCATION} - {location.LATITUDE}, {location.LONGITUDE}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationList;