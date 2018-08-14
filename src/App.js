import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import './App.css'

const token = "pk.eyJ1Ijoid2lsbC1mZXJlbnMiLCJhIjoiY2pra2o0ZDFmMGlybzNxcGowMnBkOGcwOCJ9.SakByvxcSSfCGnlG5A8MbQ"

class App extends Component {
  render() {
    return (
      <div className="App">
      <MapGL
        width={700}
        height={450}
        latitude={37.73944444}
        longitude={-119.57305556}
        zoom={9.017}

        mapboxApiAccessToken={token}
      />
      </div>
    )
  }
}

export default App
