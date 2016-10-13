import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import {API_KEY} from './api_key'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.jsx';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'wakeboard'}, videos => {
            //this.setState({videos: videos}); // ES6 POZWALA NA INNA SKLADNIE
            this.setState({videos}); // jesli nazwy sie pokrywaja mozna tego uzyc
            // rownowazne z {videos: videos}
        });
    }

    render() {
        return <div>
            Hi!
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>;
    }
}

//ReactDOM.render(<App/>, document.getElementsByClassName('container')[0]);

// querySelector zwraca 1 eleement (first) querySelectorAll zwraca wszystkie elementy w []
ReactDOM.render(<App/>, document.querySelector('.container'));