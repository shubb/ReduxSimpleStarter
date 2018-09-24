import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div classname="video-detail col-md-8">
            <div classname="embed-responsive embed-responsive-16by9">
                <iframe classname="embed-responsive-item" src={url}/>
            </div>
            <div classname="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail