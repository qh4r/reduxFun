import React from 'react';
import {GoogleMap, GoogleMapLoader} from 'react-google-maps';

export default function ({lat, lng}) {
    console.log(lat, lng);
    return (
        <td>
            <GoogleMapLoader
                containerElement={ <div style={{height: '100%'}}></div> }
                googleMapElement={
                <GoogleMap defaultZoom={8} defaultCenter={{lat: lat, lng: lng}}/>
            }
            />
        </td>
    )
}