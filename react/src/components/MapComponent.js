/*global google*/
import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


// const MapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDIdilEOk_CsFuM5xULsgYsJoc-jnQhjmc&libraries=places,drawing,geometry",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) => {
//   return(
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: props.lat, lng: props.lng }}
//       center={{ lat: props.lat, lng: props.lng }}
//     >
//       {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} /> }
//     </GoogleMap>
//   )
// })

  const MapComponent = withGoogleMap((props) => {
    return(
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        center={{ lat: props.lat, lng: props.lng }}
      >
        <Marker
          position={{ lat: props.lat, lng: props.lng }}
        />
      </GoogleMap>
    )
  })

export default MapComponent;
