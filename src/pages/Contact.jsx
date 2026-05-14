import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import ContactHero from '../assets/images/contact-hero.webp'
import HeroHomeImgshadow from "../assets/images/hero-shadow.webp"
import Brands from '../components/Brands/Brands'
import { Col, Container, Row } from 'react-bootstrap'
import ContactRight from "../assets/images/contactRight.webp"
import FooterForm from '../components/FooterForm/FooterForm'
import FooterFormMain from '../components/FooterForm/FooterFormMain/FooterFormMain'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'


const Contact = () => {
  const mainRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      const headings = gsap.utils.toArray(".heading.center");
      headings.forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,      // The heading triggers itself
            start: "top 90%",      // Starts when the individual heading hits 90% of viewport
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
        });
      });

      // --- HERO ANIMATION ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".secondary-hero",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      tl.from(".hero-heading", { y: -50, opacity: 0 })
        .from(".hero-heading h1", { y: -20, opacity: 0 }, "=0.6")
        .from(".hero-bottom-data-left", { x: -100, opacity: 0 }, "<")
      // .from(".hero-bottom-data-images ", { scale: 0, opacity: 0, ease: "back.out(1.6)", duration: 1, stagger: 0.8 }, "<")

      // --- INFINITE ANIMATIONS ---
      gsap.to(".hero-bottom-data-img img", {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(".hero-bottom-data-shadow img", {
        scale: 0.8,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });









    }, mainRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Seo title="Contact" description="Welcome to aboutpage" />
      <div ref={mainRef}>
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
              <div className="hero-bottom-data-images">
                <div className="hero-bottom-data-img">
                  <img className='img-fluid' src={ContactHero} alt="" />
                </div>
                <div className="hero-bottom-data-shadow">
                  <img className='img-fluid' src={HeroHomeImgshadow} alt="" />
                </div>
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
      </div>
    </>
  )
}

export default Contact
