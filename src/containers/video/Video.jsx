import React from 'react'
import './video.css'

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

const Video = () => {
    return (

        <div className="video-background">
            <iframe
                width={VIDEO_WIDTH}
                height={VIDEO_HEIGHT}
                src="https://www.youtube.com/embed/ER2euyF6OPk?autoplay=1&controls=0&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </div>
    );
};

export default Video