
import secImg from "../../assets/images/sec-2.webp"
import RightImg from "../../assets/images/sec-2-bg.webp"
import Btn from "../Common/Btn"
import { Col, Container, Row } from "react-bootstrap"
const Sec2 = ({ Img = secImg, openModal}) => {
    return (
        <section className="book-info-section">
            <div className="heading center">
                <h2>Lorem ipsum dolor</h2>
            </div>
            <div className="container p-0 overflow-hidden">

                <Row className="g-0 align-items-center">
                    {/* Left Side: Stays within grid alignment */}
                    <Col lg={6} md={12} xs={12} className="d-flex justify-content-end pe-lg-5">
                        <div className="book-img-container">
                            <img
                                src={Img}
                                alt="Book"
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <div
                            className="full-edge-bg"
                        // style={{ backgroundImage: `url(${RightImg})` }}
                        >
                            <div className="edge-card-content">
                                <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent at ligula nec mauris semper fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus euismod, justo nec tincidunt Praesent at ligula nec mauris semper fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere nec mauris semper.
                                </p>
                                <Btn onClick={openModal} name={"primary"} text={"Lorem ipsum"} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Sec2
