import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg--light'>
      <footer className='footer--border container d-flex flex-row justify-content-between ' >
        <div className='d-flex flex-row gap-5 lh-sm'>
            <Link to="/" className="navbar-brand">Temokin <i className="bi bi-buildings"></i></Link>
            <div>
                <p>Temokin Holdings Sdn Bhd 182413-M</p>
                <p>No.2 Jalan, 15/48 A</p>
            </div>

            <div>
                <p>Sentul Raya Boulevard,</p>
                <p>$1000 Kuala Lumpur</p>
            </div>
        </div>

        <div className='bg--light'>
            <p>c Temokin Holdings 2018</p>
            <p><Link to=''>Terms of Service</Link> |
            <Link to=''>Private Policy</Link></p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer;
