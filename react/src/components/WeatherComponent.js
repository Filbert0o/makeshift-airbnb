import React, { Component } from 'react';

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skyconIcon: '',
      temperature: '',
      condition: ''
    }

  }

  componentWillUpdate() {
    fetch(`http://localhost:4567/api/v1/forecast/${this.props.lat},${this.props.lng}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        skyconIcon: body.currently.icon,
        temperature: body.currently.temperature,
        condition: body.currently.summary
      })

    })
  }

  render() {
    let skycons = new Skycons({"color": "pink"});
    skycons.add('skycons', this.state.skyconIcon )
    return(
      <div className="callout">
        <div>
          <canvas id='skycons' width="64" height="64"></canvas>
          <p>Temperature: {this.state.temperature} &#8457;</p>
          <p>Condition: {this.state.condition}</p>
        </div>
      </div>
    )
  }
}
export default WeatherComponent;
