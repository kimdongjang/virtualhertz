import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './navbar.scss'

export default function Navbar({ refs }) {
    const location = useLocation();

    const [homeEntered, setHomeEntered] = useState(true);
    const [characterEntered, setCharacterEntered] = useState(true);
    const [newsEntered, setNewsEntered] = useState(true);
    const [contactEntered, setContactEntered] = useState(true);


    useEffect(() => {
        switch (location.pathname) {
            case "/home":
                scrollSmoothHandler(refs.homeRef);
                break;
            case "/characters":
                scrollSmoothHandler(refs.charactersRef);
                break;
        }
    }, [location, refs]);

    const scrollSmoothHandler = ref => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='vh__navbar'>
            <div className='vh__navbar__circle'>

            </div>
            <div className='vh__navbar__line1'>

            </div>
            <div className='vh__navbar-links'>
                <div className='vh__navbar-links_container'>
                    <div className={`vh__navbar-links_home${homeEntered ? '_entered' : '_leave'}`}
                        onMouseEnter={() => { console.log(homeEntered); setHomeEntered(false) }}
                        onMouseLeave={() => { console.log(homeEntered); setHomeEntered(true) }}>
                        <NavLink to='/home' style={{ textDecoration: 'none', color: '#774426' }}>
                            Home
                        </NavLink>
                    </div>
                    <div className={`vh__navbar-links_character${characterEntered ? '_entered' : '_leave'}`}
                        onMouseEnter={() => { console.log(characterEntered); setCharacterEntered(false) }}
                        onMouseLeave={() => { console.log(characterEntered); setCharacterEntered(true) }}>
                        <NavLink to='/characters' style={{ textDecoration: 'none', color: '#774426' }}>
                            Character
                        </NavLink>
                    </div>
                    <div className={`vh__navbar-links_news${newsEntered ? '_entered' : '_leave'}`}
                        onMouseEnter={() => { console.log(newsEntered); setNewsEntered(false) }}
                        onMouseLeave={() => { console.log(newsEntered); setNewsEntered(true) }}>News</div>
                    <div className={`vh__navbar-links_contact${contactEntered ? '_entered' : '_leave'}`}
                        onMouseEnter={() => { console.log(contactEntered); setContactEntered(false) }}
                        onMouseLeave={() => { console.log(contactEntered); setContactEntered(true) }}>Contact</div>
                </div>
            </div>
            <div className='vh__navbar-characters_links'>
                <div className='vh__navbar-characters_links_container'>
                    <div className='vh__navbar-characters_eque'>Eque

                    </div>
                    <div className='vh__navbar-characters_halosweety'>Halo Sweety

                    </div>
                </div>

            </div>

        </div>
    );
}
