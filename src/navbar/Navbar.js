import React from 'react'
import './navbar.css'
// import HomeIcon from '@material-ui/icons/Home';
// import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className='topbar'>
        <div className='topbarWrapper'>
           <div className="topleft">
             <span className='logo'>Texinity Events</span>
           </div>
           {/* <div className='topright'>
            <span className='topbarIconContainer'></span>
            <HomeIcon/>
           </div> */}
           {/* <div className='topright'>
           <div className="btnbtn"><Link to="/AddEvent">
            <button style={{border:'1px solid' , padding: '25px 50px 54px 50px', margin:'55px', width:'100%'}} class="glow-on-hover" type="button">Add Event!</button>
           </Link></div>
           </div> */}
            
        </div>
    </div>
    </>
  )
}
