import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../sass/style.sass';

const style = {
  width: '100%',
  height: '350px',
  color: '#1f314f',
  position: 'relative'

};

export class MapContainer extends Component {
   state = {
    showingInfoWindow: true,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}
  };       //Shows the infoWindow to the selected place upon a marker

  style = {position: 'relative'}

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
        style={style}
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