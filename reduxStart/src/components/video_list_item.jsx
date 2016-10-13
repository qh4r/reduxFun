import React from 'react';

const VideoListItem = ({video}) => {
    // w parametrze ({video})
    // jest wornoznaczne z
    // const video = props.video (z props podanym jako argument)
    // w ten sposob dostajemy sie do okreslonych argumentow z danego parametru
    // i bezposrednio deklarujemy taki referencje do pola z tego parametru
    console.log(video);
    const videoUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (<li className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img src={videoUrl} alt={videoTitle} className="media-object"/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {videoTitle}
                </div>
            </div>
        </div>
    </li>)
};

export default VideoListItem;