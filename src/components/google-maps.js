import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../sass/style.sass';

const mapStyles = {
  width: '550px',
  height: '350px',
  position: 'relative',
  color: '#1f314f'
};

export class MapContainer extends Component {
   state = {
    showingInfoWindow: true,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}
  };       //Shows the infoWindow to the selected place upon a marker

  onMarkerClick = (props, marker, e) =>
     this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
     });

   onClose = props => {
     if (this.state.showingInfoWindow) {
       this.setState({
         showingInfoWindow: false,
         activeMarker: null
       });
     }
   };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 51.511799,
         lng: 0.062106
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'I live here somewhere :)'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcOcjFZP7N4YPg0sh_LkkGFgn6U_11GG0'
})(MapContainer);
