import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import ServiceHero from '../assets/images/about-hero.webp'
import Brands from '../components/Brands/Brands'
import FooterForm from '../components/FooterForm/FooterForm'
import Sec2 from '../components/Sec2/Sec2'
import Sec2Img from "../assets/images/sce2About.webp"
import ReviewCard from '../components/ReviewCard/ReviewCard'
import { Container } from 'react-bootstrap'
import Counter from '../components/Counter/Counter'
import AboutSec3 from '../components/AboutSec3/AboutSec3'


const About = ({ openModal }) => {
  const reviewData = [
    {
      heading: "Lorem ipsum dolor",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <i className="ri-git-repository-fill"></i>,
    },
    {
      heading: "Lorem ipsum dolor",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <i className="ri-git-repository-fill"></i>,
    },
    {
      heading: "Lorem ipsum dolor",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <i className="ri-git-repository-fill"></i>,
    },
    {
      heading: "Lorem ipsum dolor",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <i className="ri-git-repository-fill"></i>,
    },
    {
      heading: "Lorem ipsum dolor",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <i className="ri-git-repository-fill"></i>,
    },
    {
      heading: "Lorem ipsum dolor",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <i className="ri-git-repository-fill"></i>,
    },
  ]
  return (
    <>
      <Seo title="About" description="Welcome to aboutpage" />
      <Hero MainHeading={"New Author book"} name={"secondary-hero"} Content={<>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero-bottom-data-left">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent at ligula nec mauris semper fermentum.</p>
              <div className="btns">
                <Btn onClick={openModal} text="Lorem ipsum" name="primary" />
                <Btn onClick={openModal} text="Lorem ipsum" name="white" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6">
            <div className="hero-bottom-data-img">
              <img className='img-fluid' src={ServiceHero} alt="" />
            </div>
          </div>

        </div>
      </>} />
      <Brands />

      <Sec2 Img={Sec2Img} openModal={openModal} />

      {/* About Section 3 */}
      <AboutSec3 openModal={openModal}/>
      
      {/* Review */}
      <section className="Review">
        <div className="heading center">
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* <Container> */}
          <ReviewCard data={reviewData} />
        {/* </Container> */}
      </section>

      {/* Counter */}
      <Counter />


      <FooterForm />
    </>
  )
}

export default About
