import React from 'react'
import Btn from '../components/Common/Btn'
import Seo from '../components/Common/Seo'

const ThankYou = () => {
    return (
        <>
            <Seo title={"Thank You"} />
            <section className="thankyou">
                <h1>Thank You for Submitting Your Details</h1>
                <p>One of our journal publication experts will contact you within 24–48 hours.</p>
                <Btn name={"primary"} text={"Back To Home"} />
            </section>
        </>
    )
}

export default ThankYou
