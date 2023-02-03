import React from 'react'
import projectImage1 from '../components/images/projectImage1.jpg';
import projectImage2 from '../components/images/projectImage2.jpg';
import projectImage3 from '../components/images/projectImage3.jpg';
import blendImage2 from '../components/images/blendImage2.jpg'

function Project() {
    return (
        <div className='bg--light bg--blend py-5 text-center' style = {{backgroundImage: `url('${blendImage2}')`}}>
            <div className='container py-5'>
                <h2 className=''>KEY PROJECTS</h2>
                <div className='row'>
                    <div className="col-md-4 card bg--light bg-transparent">
                        <img src={projectImage1}  className="card-img m-auto" alt="Projects" />
                        <div className="card-body">
                            <h4 className='card-title'>CIVIL ENGINEERING</h4>
                            <p className="card-text">Seremban Middle Ring MRRS</p>
                        </div>
                    </div>

                    <div className="col-md-4 card bg--light bg-transparent">
                        <img src={projectImage2}  className="card-img m-auto" alt="Projects" />
                        <div className="card-body">
                            <h4 className='card-title'>CIVIL ENGINEERING</h4>
                            <p className="card-text">Seremban Middle Ring MRRS</p>
                        </div>
                    </div>

                    <div className="col-md-4 card bg--light bg-transparent">
                        <img src={projectImage3}  className="card-img m-auto" alt="Projects" />
                        <div className="card-body">
                            <h4 className='card-title'>CIVIL ENGINEERING</h4>
                            <p className="card-text">Seremban Middle Ring MRRS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
