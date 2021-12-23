import React from 'react'
import './contact_me.css'
import Phone from '../../src/Components/contactimg/phone.png'
import Email from '../../src/Components/contactimg/email.png'
import Linkdin from '../../src/Components/contactimg/linkdin.jpg'

export default function Contact_Me() {
    return (
        <div className='contact'>

            <div className="c-bg">



            </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's Discuss
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="Not Found" className='c-icon' />
                            +1 1234 556 75
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="Not Found" className='c-icon' />
                            harshsh15229@gmail.com

                        </div>

                        <div className="c-info-item">

                            <img src={Linkdin} alt="Not Found" className='c-icon' />
                            Harsh Sharma

                        </div>

                    </div>
                </div>
                <div className="c-right">

                    <h1><b>Get In Touch</b></h1>

                    <form>
                        <input type="text" name='user_name' placeholder='User Name' />
                        <input type="text" name='user_email' placeholder='Email' />
                        <input type="text" name="user_number"  placeholder='Contact Number'/>
                        <input type="text" name='user_subject' placeholder='Subject'/>
                        <textarea name="message" id="#" cols="30" rows="10" placeholder='Message..'></textarea>
                        <button className="submit">Submit</button>
                    </form>
                </div>



            </div>

        </div>
    )
}
