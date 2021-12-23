import React from 'react'
import "./aboutme.css"
import images from "../../src/img/images.jpg"
import backabou from "../../src/img/backabou.jpg"
import amb from "../../src/img/amb.jpg"
export default function AboutMe() {
    return (
        <div className="am">
            <img src={backabou} alt="Not Found" className='amb'/>
            <div className="a-left">
                <div className="a-card bg">
                </div>
                <div className="a-card">
                    <img src={images} alt="NotFound" className="a-image" />

                </div>


            </div>

            <div className="a-right">
                <h2 className='i-topic'> About Me</h2>
                <hr />
                <p className="i-desc">
                    I am one of those insects who is always keen to explore and learn more and more.
                    Those for whom the branch, the way people look at them doesn't matter to them.
                    Who always live  their own life having  their own sets of principles.

                </p>

                <p className="i-desc-1">
                   I have a deep intrest in web development and solvig real-world problems using
                   Machine-Learning, I am also chegg expert in Statistics Subject and Subject Matter
                   Expert in Physics in Bartleby, which secondary source of income for me.
                   My hobbies includes playing Badminton and Cricket.
                </p>



            </div>


        </div>
    )
}
