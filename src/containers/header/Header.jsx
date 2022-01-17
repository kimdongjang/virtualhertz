import React from 'react'
import Video from '../video/Video'
import YoutubeBackground from 'react-youtube-background'


import './header.css'

const Header = () => {
    return (
        <div className='mainpage__header section__padding' id='home'>
            <div className='mainpage__header-content'>
                {/* <YoutubeBackground
                    videoId='https://www.youtube.com/watch?v=Q2AaEA8o54A'
                    onPlay='true'                  
                    className="video-iframe"
                >
                </YoutubeBackground> */}

                <Video/>
            </div>
        </div>
    )
}

export default Header