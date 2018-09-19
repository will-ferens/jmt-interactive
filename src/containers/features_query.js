import React, { Component } from 'react'
import { Layer, Source, Feature } from 'react-mapbox-gl'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'



const query = gql`
    {
        featured_points {
            type
            features {
                type
                geometry {
                    type
                    coordinates 
                }
                type
                properties {
                    pictureURL
                    location
                }
            }
        }
    }
`

class FeaturesCollection extends Component {
    render() {
        return (
            <Query query={query}>
                {({ loading, error, data}) => {
                    if(loading) return <p>loading</p>
                    if(error) return <p>Error: {error}</p>
        
                    const features = data.featured_points.features.reduce((accumulator, current) => {

                        accumulator.push({
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": current.geometry.coordinates
                            },
                            "properties": {
                                "title": current.properties.location
                            }
                        })
                        return accumulator
                    }, [])
                    
                    const FEATURED_POINTS_SOURCE = {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": features
                        }
                    }

                    return (
                        <div>
                            <Source id="featured_points_id" geoJsonSource={FEATURED_POINTS_SOURCE} />
                            <Layer 
                                type="symbol"
                                id="marker"
                                sourceId="featured_points_id"
                                layout={{ 
                                    "icon-image": "circle-11",
                                    "text-field": "{title}",
                                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                                    "text-offset": [0, 0.6],
                                    "text-anchor": "top" 
                                }}
                            >
                            </Layer>
                        </div>
                        )
                }}
            </Query>
        )
    }
}

                
            
export default FeaturesCollection