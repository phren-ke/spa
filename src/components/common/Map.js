import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const Google_Key = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = () => {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.log('Error obtaining location: ', error);
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <LoadScript googleMapsApiKey={Google_Key}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location || { lat: 0, lng: 0 }}
                zoom={10}
            >
                {location && <Marker position={location} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
