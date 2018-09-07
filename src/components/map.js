import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import '../styles/map.css'
import { coordinates, coordinatesAndLocations} from '../constants/trailCoordinates'

mapboxgl.accessToken = "pk.eyJ1Ijoid2lsbC1mZXJlbnMiLCJhIjoiY2pra2o0ZDFmMGlybzNxcGowMnBkOGcwOCJ9.SakByvxcSSfCGnlG5A8MbQ"

class Map extends Component {
    constructor() {
        super()
        this.state = {
            lng: -119.57305556,
            lat: 37.73944444,
            zoom: 9
        }
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state

        const map = new mapboxgl.Map({
            container: this.container,
            style: 'mapbox://styles/mapbox/outdoors-v10',
            center: [lng, lat],
            zoom: zoom
        })
        map.on('load', () => {
            map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": coordinates
                        }
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#CA2128",
                    "line-width": 2
                }
            })
        })
        map.on('move', () => {
            const { lng, lat } = map.getCenter()

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            })

        })
    }

    render() {
        const { lng, lat, zoom } = this.state
        return (
            <div ref={el => this.container = el} className="map" />
        ) 
    }
}

export default Map
