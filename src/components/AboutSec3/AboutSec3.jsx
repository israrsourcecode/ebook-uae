import React from 'react'
import Btn from '../Common/Btn'

const AboutSec3 = ({openModal}) => {
    return (
        <section className='AboutSec3'>
            <div className="AboutSec3Data">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="btns">
                    <Btn onClick={openModal} name={"primary"} text={"Lorem ipsum"} />
                    <Btn onClick={openModal} name={"white"} text={"Lorem ipsum"} />
                </div>
            </div>
        </section>
    )
}

export default AboutSec3
