import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/details.css'
class Details extends Component {
    
    render() {
        const selectedFeature = this.props.selectedFeature
        if(selectedFeature.location != null){
            return (
                <div className="details">
                    <header>
                        <h1>{selectedFeature.location}</h1>
                        <div className="stats">
                            <div>Mile: {selectedFeature.mile}</div>
                            <div>|</div>
                            <div>Elevation: {selectedFeature.elevation}'</div>
                        </div>
                    </header>
                    <main>
                        <div>
                            <img id="trail-picture" src={selectedFeature.pictureURL} alt={selectedFeature.location}/>
                        </div>
                        <div className="description">
                            <span>{selectedFeature.description}</span>
                        </div>
                    </main>
                </div>
            ) 
        } else {
                return (
                <div className="details">
                    <header>
                        <h1>John Muir Trail Interactive Map</h1>
                    </header>
                    <main>
                        <div>
                            <img id="trail-picture" src="https://farm5.staticflickr.com/4639/39086724622_04c2612075_k.jpg" alt="JMT"/>
                        </div>
                        <div className="description">
                            <span>On September 5th, 2017, myself and three friends embarked on a seventeen day journey through the High Sierra. Starting from Yosemite National Park and ending on top of Mt. Whitney, the John Muir Trail is a grueling, 211 mile trek that covers nearly 50,000 feet of elevation change and crosses some of the most beautiful vistas North America has to offer. This map is a brief description of the trip. Click through the points featured to see photos I've taken, learn a little bit about the trail, and see what we managed to accomplish. Happy camping!</span>
                        </div>
                    </main>
                </div>
                )  
        }
    }
}

const mapStateToProps = (state) => {
    return {
        selectedFeature: state.selectedFeature
    }
}

export default connect(mapStateToProps, null)(Details)