import React, { Component } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'


import { setMapState } from '../actions/set_map'
import { selectFeature } from '../actions/select_feature'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import '../styles/map.css'

import TrailQuery from '../components/trail_query'
import FeaturesCollection from '../components/features_query'

const TOKEN = 'pk.eyJ1Ijoid2lsbC1mZXJlbnMiLCJhIjoiY2pra2o0ZDFmMGlybzNxcGowMnBkOGcwOCJ9.SakByvxcSSfCGnlG5A8MbQ'

const Map = ReactMapboxGl({
    accessToken: TOKEN,
})

class MapWrapper extends Component {
    
    render(){
        const mapState = this.props.mapState

        return (

            <Map
                style="mapbox://styles/mapbox/outdoors-v10"
                center={ mapState.center }
                zoom={ mapState.zoom }
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }} 
                onClick={this._onMapFeatureClick}
                >
                <TrailQuery />
                <FeaturesCollection />
            </Map>

        )
    }
    _onMapFeatureClick = (map, event) => {
        const features = map.queryRenderedFeatures(event.point)
        let selectedFeature = features[0].properties
        let scrubbedCoordinates = JSON.parse(selectedFeature.coordinates)
        console.log(selectedFeature)
        this.props.selectFeature(selectedFeature)
        this.props.setMapState(scrubbedCoordinates)
    }
}

const mapStateToProps = (state) => {
    return {
        mapState: state.mapState
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectFeature, setMapState }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)

