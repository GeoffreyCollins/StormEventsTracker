import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import EventLocationChart from '../Charts/EventLocationChart';
// import EventLocationList from '../Lists/EventLocationList';
import { EventLocationContext } from '../../context/EventLocationContext';

const EventLocationsPage = () => {
    const { eventLocations, setEventLocations } = useContext(EventLocationContext);
    const [ year, setYear ] = useState('');

    useEffect(() => {
        const fetchEventLocations = async () => {
            if (year) {
                try {
                    const response = await axios.get(`http://localhost:3001/api/event-locations?year=${year}`);
                    setEventLocations(response.data);
                } catch (error) {
                    console.error('Error fetching location event data', error);
                }
            }
        };

        fetchEventLocations();
    }, [year, setEventLocations]);

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
        <EventLocationContext.Provider value={{ eventLocations }}>
            <div>
                <h1>Storm Location Events</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Year:
                        <input type='text' name="year" required />
                    </label>
                    <button type='submit'>Get Data</button>
                </form>
                {eventLocations.length && (
                    <div>
                        <EventLocationChart />
                        {/* <EventLocationList /> */}
                    </div>
                )}
            </div>
        </EventLocationContext.Provider>
)};

export default EventLocationsPage;