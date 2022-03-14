import React, { forwardRef } from 'react'
import Video from '../video/Video'
import logo_eque from '../../images/logo_eque.png'
import profile_eque from '../../images/profile_eque.jpg'
import img_background from '../../images/img_background.jpg'

import './contents.scss'

const Contents = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <img src={img_background} className='img_background' />
            <div className='mainpage__header section__padding' >
                <div className='mainpage__header-content'>
                    <img src={logo_eque} className='img_logo_eque' />
                    <img src={profile_eque} className='img_profile_eque' />
                    {/* <Video/> */}
                </div>
            </div>
        </section>
    )
});

export default Contents