import React from 'react'
import './addEvent.css'


export const AddEvent = () => {
    return (
        <div className='main'>
            <br />
            <br/>
            <form action="" className='eventform'>
                <input type="text" className="stext1" placeholder='Event' /><br />
                <input type="text" className="stext1" placeholder='Summary'/><br />
                <textarea name="field5" className="stext1" placeholder="Details"></textarea><br />
                <button className='btnbtn1'>Add</button>
                <button className='btnbtn1'>Edit</button>
                <button className='btnbtn1'>Delete</button>
            </form>
        </div>
    )
}

export default AddEvent;