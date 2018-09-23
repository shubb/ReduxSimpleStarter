import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'

const API_KEY = 'AIzaSyA2jvSX--7iPnmaBhAZHeuIBp6ioVAqpR8'

// Create a new component
// This component should produce some HTML

class App extends Component {
    constructor (props) {
        super(props);
        
        this.state = { videos: []}
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos })
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Get components generated html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));