import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from "react-bootstrap"
import footerLeftImg from "../../assets/images/footerFromImg.webp"
import FooterFormMain from './FooterFormMain/FooterFormMain';




const FooterForm = () => {
  
    return (
        <>
            <div className="heading center footerFromHeading">
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <section className="footerFrom">
                <Container>

                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <div className="footerFormLeft">
                                <img className="img-fluid" src={footerLeftImg} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <div className="footerFormData">
                                <h3>Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <FooterFormMain />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default FooterForm
