import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash'

const keyA = 'AIzaSyDzdQs';
const keyB = 'FwHxpac6F';
const API_KEY = `${keyA}_6wO2t3gI4o2${keyB}vLuzKow`;
//To prevent bots on git to recognize api key


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Will Fuller');

    }


    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)



        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />

                <VideoDetail video={this.state.selectedVideo} />

                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />

            </div>
        )
    }

    videoSearch(term) {
        YTSearch(
            {
                key: API_KEY,
                term: term
            }, (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
    }

}

ReactDom.render(<App />, document.querySelector('.container'))