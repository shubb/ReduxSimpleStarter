import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyA2jvSX--7iPnmaBhAZHeuIBp6ioVAqpR8'

// Create a new component
// This component should produce some HTML

const App = () => {
    return <div>Hi!</div>;
}

// Get components generated html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));