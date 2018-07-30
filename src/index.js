import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBNwmtPqDpnGHc5v_BkbJ2ovKLF75vcAdE';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null            
        };

        YTSearch(
            {
                key: API_KEY,
                term: 'Shelter Insurance'
            }, (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });

    }


    render() {
        return (
            <div>
               <div className="block"><h2 className="header">Shelter Tube</h2></div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        )
    }

}






ReactDom.render(<App />, document.querySelector('.container'))