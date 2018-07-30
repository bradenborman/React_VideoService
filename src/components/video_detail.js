import React, { Component } from 'react';


const VideoDetail = ({ video }) => {
    
    if(!video)
        return <div>LOADING...</div>

    const videoId = video.id.videoId;
    const URL = `https://www.youtube.com/embed/${videoId}`

    console.log(video)

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={URL}></iframe>
            </div>
            <div className="details">
                <div className="title">{video.snippet.title}</div>
                <hr />
                <div> {video.snippet.description}  </div>
            </div>
        </div>
    )
}


export default VideoDetail;