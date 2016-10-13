import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
    const videos = props.videos && props.videos.map(video => {
            return <VideoListItem selectVideoCallback={props.selectVideoCallback}
                                  video={video} key={video.etag}/>
        });

    return (
        <ul className="col-md-4 list-group">
            {videos}
        </ul>
    )
};

export default VideoList;