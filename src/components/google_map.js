import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api'

class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.showMap = this.showMap.bind(this);
    }

    componentWillMount() {
        //Goes in component will mount so that we know that refs.map exists when it returns
        // Also, this won't work because the key used isn't set up for this host
        loadGoogleMapsApi({ key: "AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs" }).then(this.showMap)
    }

    showMap(googleMaps) {
        new googleMaps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;
