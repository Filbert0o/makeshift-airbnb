/*global google*/
import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import PlacesForm from '../components/PlacesForm';
import MapComponent from "../components/MapComponent"
import WeatherComponent from "../components/WeatherComponent"


class GooglePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      geocodeLat: 0,
      geocodeLng: 0,
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    //this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }



  handleChange(address) {
    this.setState({
      address: address
    })
  }

  handleSelect(address){
    this.setState({
      address: address,
      loading: true
    })

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success', { lat, lng })
        this.setState({
          geocodeLat: lat,
          geocodeLng: lng,
          loading: false
        })
      })
      .catch((error) => {
        console.log('Nope', error)
        this.setState({
          loading: false
        })
      })

  }



  // handleFormSubmit(event) {
  //   event.preventDefault()
  //
  //   geocodeByAddress(this.state.address)
  //     .then(results => getLatLng(result[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.log('Error', error))
  // }

  render() {
    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      placeholder: 'Search Places...',
      autoFocus: true,
    }
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="Demo__suggestion-item">
        <i className='fa fa-map-marker Demo__suggestion-icon'/>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>
    )
    //
    // let options = {
    //   location: new google.maps.LatLng(this.geocodeLat, this.geocodeLng),
    //   radius: 2000,
    //   types: ['address']
    // }

    return(
      <div className="rows text-center">

        <div className="large-6 columns">
          <WeatherComponent
            lat={this.state.geocodeLat}
            lng={this.state.geocodeLng}
          />
          <PlacesForm
            //handleFormSubmit={this.handleFormSubmit}
            lat={this.state.geocodeLat}
            lng={this.state.geocodeLng}
            handleSelect={this.handleSelect}
            onEnterKeyDown={this.handleSelect}
            autocompleteItem={AutocompleteItem}
            // options={this.options}
            inputProps={inputProps}
          />
        </div>

        <div className="large-6 columns">
          <MapComponent
            lat={this.state.geocodeLat}
            lng={this.state.geocodeLng}
            containerElement={<div style={{ height: `1000px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>


      </div>
    )
  }
}

export default GooglePlaces;
