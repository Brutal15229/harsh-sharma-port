//This is the first part called Introduction named in short as Intro
import React from 'react' // Importing React library
import "./intro.css" //importing css file of introduction

import iii from '../../src/img/iii.jpg' 
/* First we have created a folder called components 
and then inside we have created another folder named img where we have our image iii
which we have imported it into this javascript library*/

// Now we have created a  function called Intro 
// and then we are having our simple html in returning section. 

export default function Intro() {
    return (
        // In  HTML and CSS we have classes, but in react we have className, which is same as class, Simlarly we have HTMLfor in label instead of id 
        <div className="i">

            <div className="i-left"> 

                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello,My Name is</h2>
                    <h2 className="i-name">Harsh Sharma</h2>
                    <hr />
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Web Developer
                            </div>
                            <div className="i-title-item">
                                Chegg Expert(Statstics)
                            </div>

                            <div className="i-title-item">
                                Writer
                            </div>

                            <div className="i-title-item">
                                Physics-Matter-Expert(Bartlbey)
                            </div>

                            <div className="i-title-item">
                                UI/UX Designer
                            </div>





                        </div>


                    </div>

                </div>
            </div>





            <div className="i-right">

                <img src={iii} alt="Not-Found" className='i-image' />
            </div>

        </div>
    );

}
/* I made this intro part using flexbox where i have divided my intro section into
left and right half respectively.
The website is fully responsive as well.*/

