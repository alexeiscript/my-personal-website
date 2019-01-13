import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../sass/style.sass';

const mapStyles = {
  width: '550px',
  height: '350px',
  position: 'relative'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 51.525347,
         lng: 0.057761
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcOcjFZP7N4YPg0sh_LkkGFgn6U_11GG0'
})(MapContainer);
