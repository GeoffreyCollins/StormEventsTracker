import React from 'react';
import '../Home.css';

const Home = () => {
    return (
        <div>
            <div class="Home">
            <h1 class="homeH1">Welcome to the Storm Events Tracker!</h1>
                <button className='homeButton' onClick={() => window.location.href='/details'}>Go to Details</button>
                <button className='homeButton' onClick={() => window.location.href='/fatalities'}>Go to Fatalities</button>
                <button className='homeButton' onClick={() => window.location.href='/event-locations'}>Go to Event Locations</button>
            </div>
        </div>
    );
};

export default Home;