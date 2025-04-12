import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

export default function Maymap() {
    const containerStyle = {
        width: "600px",
        height: "600px",
        borderRadius: '8px',
    };
    const lightModeStyle = 
        [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#878787"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f9f5ed"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#aee0f4"
                    }
                ]
            }
        ]
      
    const center = {
        lat: 26.8206,
        lng: 30.8025,
    };
    const locations = [
        { lat: 31.0270, lng: 30.7753, title: 'محافظة البحيرة', address: 'شارع 26 يوليو، دمنهور' },
        { lat: 31.2156, lng: 31.5894, title: 'محافظة الدقهلية', address: 'شارع الجمهورية، المنصورة' },
        { lat: 29.1840, lng: 30.4377, title: 'محافظة الفيوم', address: 'شارع الحاكم بأمر الله، الفيوم' },
        { lat: 30.8276, lng: 31.1633, title: 'محافظة القليوبية', address: 'شارع كورنيش النيل، بنها' },
        { lat: 31.1121, lng: 30.9930, title: 'محافظة كفر الشيخ', address: 'شارع المنشية، كفر الشيخ' },
        { lat: 27.04740007885521, lng:  31.31922686256422, title: 'محافظة سوهاج', address: 'شارع التحرير، سوهاج' },
        { lat: 31.2156, lng: 29.9187, title: 'محافظة الاسكندرية', address: 'شارع الشاطبي، الإسكندرية' },
        { lat: 27.1800, lng: 31.1837, title: 'محافظة أسيوط', address: 'شارع الجلاء، أسيوط' },
    ];
    const [selectedMarker, setSelectedMarker] = useState(null);
    return (
        <LoadScript googleMapsApiKey="AIzaSyAW_eAwNYM_D_GdvEHFIFe1Zl4zN50BzM8">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                options={{ styles: lightModeStyle }}
                
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.lat, lng: location.lng }}
                        onClick={() => setSelectedMarker(location)} 
                    />
                ))}

                {selectedMarker && (
                    <InfoWindow
                        position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <h4>{selectedMarker.title}</h4>
                            <p>{selectedMarker.address}</p> 
                            <a
                                href={`https://www.google.com/maps?q=${selectedMarker.lat},${selectedMarker.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    color: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                افتح في Google Maps
                            </a>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    )
}
