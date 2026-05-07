import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import ContactHero from '../assets/images/contact-hero.webp'
import Brands from '../components/Brands/Brands'
import { Col, Container, Row } from 'react-bootstrap'
import ContactRight from "../assets/images/contactRight.webp"
import FooterForm from '../components/FooterForm/FooterForm'
import FooterFormMain from '../components/FooterForm/FooterFormMain/FooterFormMain'


const Contact = () => {
  return (
    <>
      <Seo title="Contact" description="Welcome to aboutpage" />
      <Hero MainHeading={"New Author book"} name={"secondary-hero"} Content={<>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero-bottom-data-left">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent at ligula nec mauris semper fermentum.</p>
              <div className="btns">
                <Btn text="Lorem ipsum" name="primary" />
                <Btn text="Lorem ipsum" name="white" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6">
            <div className="hero-bottom-data-img">
              <img className='img-fluid' src={ContactHero} alt="" />
            </div>
          </div>

        </div>
      </>} />
      {/* <Brands /> */}
      <section className="contact">
        <div className="heading center">
          <h2>Contact Us</h2>
          <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={5}>
              <div className="contactFrom">
                <FooterFormMain />
              </div>
            </Col>
            <Col xs={12} md={6} lg={7}>
              <div className="contactImg">
                <img className='img-fluid' src={ContactRight} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
