import React from 'react';
import ReactDOM from 'react-dom';

import {API_KEY} from './api_key'

import SearchBar from './components/search_bar';

const App = () => {
    return <div>
        Hi!
        <SearchBar />
    </div>;
};

//ReactDOM.render(<App/>, document.getElementsByClassName('container')[0]);

// querySelector zwraca 1 eleement (first) querySelectorAll zwraca wszystkie elementy w []
ReactDOM.render(<App/>, document.querySelector('.container'));