import React from 'react'
import Hero from '../../components/Hero.js';
import Work from '../Work.js';
import Project from '../Project.js';
import Launch from '../Launch.js';


function Home() {
  return (
    <div className='bg--light'>
      <Hero />   
      <Work />
      <Project />
      <Launch />
    </div>
  )
}

export default Home;
