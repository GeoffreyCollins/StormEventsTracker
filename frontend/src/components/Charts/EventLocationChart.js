import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import '../../App.css';

const EventLocationChart = ({ year }) => {
  const [geoData, setGeoData] = useState(null);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchGeoData = async () => {
      const response = await axios.get('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json');
      setGeoData(response.data);
    };

    const fetchEventData = async () => {
      const response = await axios.get(`http://localhost:3001/api/event-locations?year=${year}`);
      setEventData(response.data);

    };

    fetchGeoData();
    fetchEventData();
  }, [year]);

  const getColor = (state) => {
    const event = eventData.find(e => e._id === state.properties.name.toUpperCase());
    const count = event ? event.count : 0;
    return count > 5000 ? '#800026' :
           count > 3500 ? '#BD0026' :
           count > 2000 ? '#E31A1C' :
           count > 1000 ? '#FC4E2A' :
           count > 500  ? '#FD8D3C' :
           count > 200  ? '#FEB24C' :
           count > 100  ? '#FED976' :
           count > 50   ? '#FFEDA0' :
                   '#FFEDA0';
  };

  const style = (feature) => ({
    fillColor: getColor(feature),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  });


  return (
    <div>
        <MapContainer style={{ height: '50vh', width: '200%' }} zoom={3.5} center={[40, -20]}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geoData && <GeoJSON data={geoData} style={style} />}
        </MapContainer>

        {/* Color Legend Table */}
        <table>
            <thead>
            <tr>
                <th>Event Count</th>
                <th>Color</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>5000+</td>
                <td style={{ backgroundColor: '#800026' }}></td>
            </tr>
            <tr>
                <td>3500 - 5000</td>
                <td style={{ backgroundColor: '#BD0026' }}></td>
            </tr>
            <tr>
                <td>2000 - 3500</td>
                <td style={{ backgroundColor: '#E31A1C' }}></td>
            </tr>
            <tr>
                <td>1000 - 2000</td>
                <td style={{ backgroundColor: '#FC4E2A' }}></td>
            </tr>
            <tr>
                <td>500 - 1000</td>
                <td style={{ backgroundColor: '#FD8D3C' }}></td>
            </tr>
            <tr>
                <td>200 - 500</td>
                <td style={{ backgroundColor: '#FEB24C' }}></td>
            </tr>
            <tr>
                <td>100 - 200</td>
                <td style={{ backgroundColor: '#FED976' }}></td>
            </tr>
            <tr>
                <td>50 - 100</td>
                <td style={{ backgroundColor: '#FFEDA0' }}></td>
            </tr>
            <tr>
                <td>0 - 50</td>
                <td style={{ backgroundColor: '#FFEDA0' }}></td>
            </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {eventData.map(event => (
                    <tr key={event._id}>
                        <td>{event._id}</td>
                        <td>{event.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default EventLocationChart;