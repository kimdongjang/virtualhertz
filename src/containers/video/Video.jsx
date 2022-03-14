import React from 'react'
import './video.scss'

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

const Video = () => {
    return (

        <div className="video-background">
            <iframe
                src="https://www.youtube.com/embed/iYwqWcq86A8?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&widgetid=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </div>
    );
};

export default Video