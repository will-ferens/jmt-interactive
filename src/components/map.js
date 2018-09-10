import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import '../styles/map.css'
import { coordinates, coordinatesAndLocations, maxBounds} from '../constants/trailCoordinates'

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
            zoom: zoom,
            maxBounds: maxBounds
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
            const features = coordinatesAndLocations.reduce((accumulator, current) => {
                accumulator.push({
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [current.longitude, current.latitude]
                    },
                    "properties": {
                        "title": current.location,
                    }
                })
                return accumulator
            },[])
            map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": features
                    }
                },
                "layout": {
                    "icon-image": "{icon}-15",
                    "text-field": "{title}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
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
        map.on('click', (event) => {
            console.log(event.lngLat)
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
