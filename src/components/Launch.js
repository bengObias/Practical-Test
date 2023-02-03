import React from 'react';
import Button from './Button.js';
import launchImage1 from '../components/images/launchImage1.jpg';
import launchImage2 from '../components/images/launchImage2.png';

function Launch() {
    return (
        <div className='bg--light py-5'>
            <div className='container text-center'>
                <h2>LATEST LAUNCHES</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={launchImage1} alt="House Interior" className="img-fluid"/>
                    </div>
                
                    <div className='col-md-6 m-auto'>
                        <img src={launchImage2} alt="Logo" className="launch-img"/>
                        <h5>2 & 3-Storey Terrace Homes</h5>
                        <h5>| 20' x 70' | FREEHOLD</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <Button btnColor='btn--dark' btnName='IM INTERESTED'/>
            </div>
        </div>
    )
}

export default Launch;
