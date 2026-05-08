
import { Col, Container, Row } from 'react-bootstrap'


const ServiceSec1 = () => {
   
    return (
        <>
            <section className="servicesec1">
                <div className="heading center">
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <p >Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default ServiceSec1
