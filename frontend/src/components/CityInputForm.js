import React, { useState } from 'react';

const CityInputForm = ({ handleSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(city);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default CityInputForm;