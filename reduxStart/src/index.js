import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import {API_KEY} from './api_key'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.jsx';
import VideoDetails from './components/video_details';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {videos: [], selectedVideo: null};

        YTSearch({key: API_KEY, term: 'wakeboard'}, videos => {
            //this.setState({videos: videos}); // ES6 POZWALA NA INNA SKLADNIE
            this.setState({videos, selectedVideo: videos[0]}); // jesli nazwy sie pokrywaja mozna tego uzyc
            // rownowazne z {videos: videos}
        });
    }

    render() {
        return <div>
            <SearchBar />
            <VideoDetails video={this.state.selectedVideo}/>
            <VideoList selectVideoCallback={this.selectVideo.bind(this)} videos={this.state.videos}/>
        </div>;
    }

    // mozna by w binding wpisac
    // selectVideoCallback={selectedVideo => this.setState({selectedVideo})}
    selectVideo(selectedVideo) {
        this.setState({selectedVideo})
    }
}

//ReactDOM.render(<App/>, document.getElementsByClassName('container')[0]);

// querySelector zwraca 1 eleement (first) querySelectorAll zwraca wszystkie elementy w []
ReactDOM.render(<App/>, document.querySelector('.container'));