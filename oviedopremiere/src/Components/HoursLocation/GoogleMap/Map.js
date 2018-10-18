import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '48vw',
    height: '45vh'
  }

class GoogleMap extends React.Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={17} initialCenter={{ lat: 28.656574, lng: -81.183598 }} style={style}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB_0VyeaGxHK3wAKbO93miDKiBhJ2jJfcc')
})(GoogleMap)