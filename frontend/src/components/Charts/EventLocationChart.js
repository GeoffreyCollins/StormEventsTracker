import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as d3 from 'd3';

const EventLocationChart = () => {
    const [geoJSON, setGeoJSON] = useState(null);
    const [eventLocations, setEventLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/event-locations')
            .then(response => response.json())
            .then(data => setEventLocations(data))
            .catch(error => console.error('Error fetching event locations', error));

            d3.json("https://storage.googleapis.com/kagglesdsdata/datasets/831691/1428241/us-states.json?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20240715%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240715T234511Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=6f9effcbd37fdbc213231636e3121c88c4d8478e5eb6c6b39108e89e34944b4e662faa7a2374acbf32fe3daafd32d49c1db8d553bc14c9d4fc38b8e9ff982d93dc956210fa0b9cc13bef7d32739c4c68064e1f70c1e974e35cb2afa939611bfce4c355c841ec64c7585e09b2175fd3109f81a7b28b485d6c273903848b9a13d46fc412fe5161c111afadbc77ca2bca0c1d64b70778f40a990efd91e73a271c0d5bfb93eac50568780426fe38a28a9afaea8695fb530431ba35cb1b229c7b41e2131a02a3bbe3446d983af6622a60433c672489a4ee60dbe5e934ca0959d63f320080ded2f1d6237123522a17cd8e7a40f67588e68d695024a3839a2abd88d792")
            .then(data => setGeoJSON(data))
            .catch(error => console.error('Error fetching geoJSON data', error));
    }, []);

    const mapColor = (d) => {
        return  d > 1000 ?  '#800026' :
                d > 500 ?   '#BD0026' :
                d > 200 ?   '#E31A1C' :
                d > 100 ?   '#FC4E2A' :
                d > 50 ?    '#FD8D3C' :
                d > 20 ?    '#FEB24C' :
                d > 10 ?    '#FED976' :
                            '#FFEDA0';
        };

        const style = (feature) => {
            const state = feature.properties.name;
            const eventLocation = eventLocations.find(location => location.state === state)?.count || 0;
            return {
                    fillColor: mapColor(eventLocation),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
            };
        };

            if (!geoJSON) {
                return <div>Mapping Data...</div>;
            }

            return (
                <MapContainer style={{ height: '600px', width: '100%' }} zoom={4} center={[37.8, -96]}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <GeoJSON
                        data={geoJSON}
                        style={style}
                    />
                </MapContainer>
            );
};

export default EventLocationChart;