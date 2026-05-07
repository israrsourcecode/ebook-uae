import { Col, Container, Row } from 'react-bootstrap'
import sec3Img from "../../assets/images/sec3Img.webp"
import Btn from '../Common/Btn'

const Sec3 = ({ heading, para, Img = sec3Img, openModal }) => {
    return (
        <section className='sec3'>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <div className="sec3Img">
                            <img className='img-fluid' src={Img} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <div className="sec3Data">
                            <div className="heading left">
                                <h2>{heading}</h2>
                            </div>
                            <p>{para}</p>
                            <div className="btns">
                                <Btn onClick={openModal} name={"primary"} text={"Lorem ipsum"} />
                                <Btn onClick={openModal} name={"white"} text={"Lorem ipsum"} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sec3
