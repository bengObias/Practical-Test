import React from 'react'
import Button from './Button.js';
import workImage1 from '../components/images/workImage1.jpg';

function Work() {
  return (
    <div className='work-wrapper bg--dark'>
      <section className= "container">
        <h2 className='text-center'>WHAT WE DO</h2>
          <div className='row'>
            <div className='col-md-6 text-end m-auto'>
              <h3>CIVIL ENGINEERING</h3>
              <p>From its humble beginnings as a high-quality pip jacking specialist, Temokin led the way with Malaysia's first microtunelling project and has since expanded into the building of electricty substations, major underground sewage lines, complex bridges and major highways.</p>
              <Button btnColor = 'btn--light' btnName= 'CHECK OUT OUR WORK '/>
            </div>

            <div className='col-md-6'>
              <img src={workImage1} alt="Building" className="img-fluid"/>
            </div>
          </div>
        </section>
    </div>
            
      
  
    
  )
}

export default Work;
