import React, { Component } from 'react'
import  './styles/app.css'
import Map from './components/map'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Map />
      </div>
    )
  }
}

export default App

// <MapGL
//         latitude={37.73944444}
//         longitude={-119.57305556}
//         zoom={9.017}
//         mapStyle={'mapbox://styles/mapbox/outdoors-v10'}
//         mapboxApiAccessToken={token}
//       />