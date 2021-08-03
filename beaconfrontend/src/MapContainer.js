import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const MapContainer = () => {

    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
    const defaultCenter = {
        lat: 4, lng: 102.5
      }

    return (  
        <LoadScript
        googleMapsApiKey='AIzaSyDzs7YUiaVe6rwxqOfJGVI9hen7U6pghow'>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter}
         />
      </LoadScript>
    );
}
 
export default MapContainer;