import React from 'react';
import '../Home.css';

const Home = () => {
    return (
        <div>
            <div>
            <h1>Welcome to the Storm Events Tracker!</h1>
                <button className='button' onClick={() => window.location.href='/details'}>Go to Details</button>
                <button className='button' onClick={() => window.location.href='/fatalities'}>Go to Fatalities</button>
                <button className='button' onClick={() => window.location.href='/event-locations'}>Go to Event Locations</button>
            </div>
        </div>
    );
};

export default Home;