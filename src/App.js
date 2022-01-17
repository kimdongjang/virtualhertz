import React from 'react';

import { Footer, Header} from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
            <div className='mainpage__bg'>
                {/* <Navbar /> */}
                <Header />
            </div>
            <Footer/>
        </div>
  );
}

export default App;
