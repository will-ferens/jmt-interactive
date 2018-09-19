import React from 'react'
import { Layer, Source } from 'react-mapbox-gl'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const TrailQuery = () => {
    return (
        <Query query={gql`
                {
                    trail_coordinates {
                        type 
                        features {
                            geometry {
                                type
                                coordinates
                            }
                        }
                    } 
                }
            `}>
                {({ loading, error, data }) => {
                    
                    if (loading) return <p>Loading..</p>
                    if(error) return <p>Error: {error}</p>
                    const coordinates = data.trail_coordinates.features.map(current => {
                        return current.geometry.coordinates
                    })
                    const TRAIL_COORDINATES_SOURCE = {
                        "type": "geojson",
                        "data": {
                            "type": "Feature",
                            "geometry": {
                                    "type": "LineString",
                                    "coordinates": coordinates
                                }
                        }
                    }
                    const paint = { "line-color": "#CA2128", "line-width": 2 }
                    return (
                        <div>
                            <Source id="trail_coordinates_id" geoJsonSource={TRAIL_COORDINATES_SOURCE} />
                            <Layer 
                                id="trail_layer"
                                type="line"
                                sourceId="trail_coordinates_id"
                                paint={paint}
                            >
                            </Layer>
                        </div>
                    )
                }}
            </Query>
    )
}

export default TrailQuery
