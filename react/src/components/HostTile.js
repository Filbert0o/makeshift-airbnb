import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


const HostTile = props =>{
  return(
    <form className="new-article-form callout" onSubmit={props.handleFormSubmit} method="post">
      <label>Name:
      <input
        name='name'
        type='text'
        value={props.name}
        onChange={props.handleNameChange}
      />
    </label>

    <label>Email:
      <input
        name='email'
        type='text'
        value={props.email}
        onChange={props.handleEmailChange}
      />
    </label>

    <label>Property Type:
      <input
        name='type'
        type='text'
        value={props.type}
        onChange={props.handleTypeChange}
      />
    </label>

    <label>Address:
      <PlacesAutocomplete
        onSelect={props.handleAddressSelect}
        onEnterKeyDown={props.onEnterKeyDown}
        autocompleteItem={props.autocompleteItem}
        inputProps={props.inputProps}
      />
    </label>

    <div className="button-group">
      <button className="button" onClick={props.handleClearForm} >Clear</button>
      <input className="button" type="submit" value="Submit" />
    </div>

  </form>

  )
}

export default HostTile;
