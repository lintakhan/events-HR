import React from 'react'
import './firstSection.css'
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DoneIcon from '@material-ui/icons/Done';
import event4img from './slideshow/event4.jpg'
import eventimg from './slideshow/event.jpg'
import event2img from './slideshow/event2.jpg'
import event3img from './slideshow/event3.jpg'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { fontSize } from '@mui/system';

export const FirstSection = () => {
  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <div className='image'>
        <div className='firstPortion'>

          <Carousel style={{ height: "460px" }} autoplay>
            <div>
              <img style={contentStyle} style={{ height: '460px', width: "100%" }} src={event2img} />
            </div>
            <div>
              <img style={contentStyle} style={{ height: '460px', width: "100%" }} src={eventimg} />
            </div>
            <div>
              <img style={contentStyle} style={{ height: '460px', width: "100%" }} src={event3img} />
            </div>
            <div>
              <img style={contentStyle} style={{ height: '460px', width: "100%" }} src={event4img} />
            </div>
          </Carousel>

        </div>


        <div className='secondPortion'>
          <h4>Daily Tasks</h4>
          <div className='first'>

            <p>< DoneIcon /> &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore</p>
          </div>
          <div className='first'>
            <p>< DoneIcon /> &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore</p>
          </div>
          <div className='first'>
            <p>< DoneIcon /> &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore</p>
          </div>
          <div className='first'>
            <p>< DoneIcon /> &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore tempore</p>
          </div>


        </div>


      </div>



      <div className='Container'>
        <div className='firstSection'>
          <h3>Announcements</h3>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti iste quod ratione. Qui inventore libero harum ea dolores pariatur.</p>
          <br />

          <span>
            <h3>Upcoming Events</h3>
            <p className='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam voluptate deserunt consequuntur ut laudantium architecto nobis facere dicta quas.</p>
            <p className='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex labore dolorum fugiat libero magnam autem odio, laborum sunt modi cum!
            </p>
            <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem qui enim rem odit, debitis dolorum repudiandae ipsa aperiam fugit nesciunt.</p>
          </span>
        </div>



        <div className='secondSection'>

          <div className='icons'>
            <div className='Box'>
              < InfoIcon style={{ fontSize: 55 }} />
              <p className='heading'>Report a Problem</p>
              <p className='inerPara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, saepe deserunt! Tenetur ab, odit vitae ea ipsum cumque temporibus quasi aliquid amet cupiditate, molestiae at consectetur hic cum dolore optio?</p>
            </div>
            <div className='Box'>
              < PermContactCalendarIcon style={{ fontSize: 55 }} />
              <p className='heading'>End-User Services</p>
              <p className='inerPara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, saepe deserunt! Tenetur ab, odit vitae ea ipsum cumque temporibus quasi aliquid amet cupiditate, molestiae at consectetur hic cum dolore optio?</p>
            </div>
            <div className='Box'>
              < BusinessCenterIcon style={{ fontSize: 55 }} />
              <p className='heading'>Office Anouncements</p>
              <p className='inerPara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, saepe deserunt! Tenetur ab, odit vitae ea ipsum cumque temporibus quasi aliquid amet cupiditate, molestiae at consectetur hic cum dolore optio?</p>
            </div>
          </div>
          
          <Link to="/AddEvent">
          <button style={{border:'1px solid' , padding: '25px 50px 54px 50px', margin:'55px', marginRight:'0px', width:'100%', fontSize:'20px'}} class="glow-on-hover" type="button">Add Event!</button>
          </Link>

        </div>
      
        

      </div>
      

    </div>



  )

}