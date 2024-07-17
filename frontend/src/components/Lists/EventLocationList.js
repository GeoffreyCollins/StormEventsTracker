import React from 'react';
const EventLocationList = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {data.map(eventLocation => (
                    <div key={eventLocation.id}>{eventLocation.name}</div>
                ))}
            </ul>
        </div>
    );
};

export default EventLocationList;