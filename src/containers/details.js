import React, { Component } from 'react'

import { connect } from 'react-redux'

class Details extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="details">
                <header>
                    <h1>John Muir Trail Interactive Map</h1>
                </header>
                <main>
                    <h2>Welcome!</h2>
                    <div className="description">
                        <p>On September 5th, 2017, myself and three friends embarked on a seventeen day journey through the High Sierra. Starting from Yosemite National Park and ending on top of Mt. Whitney, the John Muir Trail is a grueling, 211 mile trek that covers nearly 50,000 feet of elevation change and crosses some of the most beautiful vistas North America has to offer. This map is a brief description of the trip. Click through the points featured to see photos I've taken, learn a little bit about the trail, and see what we managed to accomplish. Happy camping!</p>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedFeature: state.selectedFeature
    }
}

export default connect(mapStateToProps, null)(Details)