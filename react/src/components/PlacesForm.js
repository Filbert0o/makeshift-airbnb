/*global google*/
import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const PlacesForm = props => {

  // let map;
  // function initMap() {
  //   let uluru = { lat: props.lat, lng: props.lng }
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   })
  //   let marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   })
  //   //console.log('init map')
  // }

  return(
    <div>
      <PlacesAutocomplete
        onSelect={props.handleSelect}
        onEnterKeyDown={props.onEnterKeyDown}
        autocompleteItem={props.autocompleteItem}
        inputProps={props.inputProps}
        // options={props.options}
      />

    </div>
  )
}

export default PlacesForm;
