import React, { Component } from 'react';
import HostTile from "../components/HostTile"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


class HostFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      type: '',
      address: ''
    }
    this.handleAddressSelect = this.handleAddressSelect.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      type: '',
      address: ''
    })
  }

  handleAddressSelect(address){
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

  handleAddressChange(address) {
    this.setState({
      address: address
    })
  }

  handleNameChange() {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange() {
    this.setState({
      email: event.target.value
    })
  }

  handleTypeChange() {
    this.setState({
      type: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.handleClearForm(event)
  }



  render() {
    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleAddressChange,
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

    return(
      <div>
        <HostTile
          name={this.state.name}
          email={this.state.email}
          type={this.state.type}
          address={this.state.address}

          handleClearForm={this.handleClearForm}
          handleFormSubmit={this.handleFormSubmit}
          handleNameChange={this.handleNameChange}
          handleEmailChange={this.handleEmailChange}
          handleTypeChange={this.handleTypeChange}
          handleAddressChange={this.handleAddressChange}

          handleAddressSelect={this.handleAddressSelect}
          onEnterKeyDown={this.handleAddressSelect}
          autocompleteItem={AutocompleteItem}
          inputProps={inputProps}
        />
      </div>
    )
  }
}
export default HostFormContainer;
