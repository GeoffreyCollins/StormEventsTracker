import React, { useState } from 'react';
import EventLocationChart from '../Charts/EventLocationChart';

const EventLocationsPage = () => {
    const [year, setYear] = useState(2024); // Default year
    const [yearValue, setYearValue] = useState('');

    const handleYearChange = (e) => {
        setYearValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (yearValue) {
            setYear(yearValue);
        } else {
            console.error('Year is required');
        }
    };

    return (
            <div>
                <h1>Storm Location Events</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Year:
                        <input 
                        type="text" 
                        value={yearValue}
                        onChange={handleYearChange}
                        placeholder="Enter a year"
                        />
                    </label>
                    <button type="submit">Get Data</button>
                </form>
                <EventLocationChart year={year}/>
            </div>
    );
};

export default EventLocationsPage;