import React, { Component } from 'react'

import MapWrapper from './containers/map'
import Details from './containers/details'

import  './styles/app.css'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <Details />
          <MapWrapper />
        </div>
      </ApolloProvider>
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