import React from 'react'
import Showcase from '../Showcase.js';
// import blendImage3 from '../images/blendImage3.jpg'
import CivilEng from '../CivilEng.js';
import ProjectList from '../ProjectList.js';

function Civil() {
  return (
    <div className='civil-bg' >
      <Showcase />
      <CivilEng/>
      <div className='bg--skew '>
        <ProjectList/>
      </div> 
    </div>
 
  )
}
// style={{background: `linear-gradient(rgba(238, 226, 223, 0.5), rgba(238, 226, 223,0.8)),  url('${blendImage3}')`}}
export default Civil;
