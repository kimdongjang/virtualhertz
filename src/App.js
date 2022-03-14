import React, { useRef } from 'react';
import { HashRouter } from "react-router-dom";

import './App.scss';
import Navbar from './containers/navbar/Navbar';
import Footer from './containers/footer/Footer';
import Contents from './containers/contents/Contents';
import Characters from './containers/characters/Characters';

function App() {
    const homeRef = useRef(null);
    const charactersRef = useRef(null);
    const newsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className='App'>
            <div className='mainpage__bg'>
                <HashRouter>
                    <Navbar refs={{ homeRef, charactersRef, newsRef, contactRef }} />
                    <Contents ref={homeRef} />
                    <Characters ref={charactersRef} />
                </HashRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
