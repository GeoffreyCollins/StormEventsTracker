import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FatalityChart from '../Charts/FatalityChart';
import { FatalityContext } from '../../context/FatalityContext';

const FatalitiesPage = () => {
    const { fatalities, setFatalities } = useContext(FatalityContext);
    const [ year, setYear ] = useState('');

    useEffect(() => {
        const fetchFatalities = async () => {
            if (year) {
                try {
                    const response = await axios.get(`http://localhost:3001/api/fatalities?year=${year}`);
                    setFatalities(response.data);
                } catch (error) {
                    console.error('Error fetching fatality data', error);
                }
            }
        };

        fetchFatalities();
    }, [year, setFatalities]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const yearValue = e.target.elements.year?.value;
        if (yearValue) {
            setYear(yearValue);
        } else {
            console.error('Year is required');
        }
    };

    return (
        <FatalityContext.Provider value={{ fatalities }}>
            <div>
                <h1>Storm Fatalities</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Year:
                        <input type='text' name="year" required />
                    </label>
                    <button type='submit'>Get Data</button>
                </form>
                {fatalities.length && (
                    <div>
                        <FatalityChart  />
                    </div>
                )}
            </div>
        </FatalityContext.Provider>
    );
};

export default FatalitiesPage;