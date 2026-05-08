import React from 'react'
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import HeroHomeImg from "../assets/images/hero-home.webp"
import Brands from '../components/Brands/Brands'
import ServicesCard from '../components/ServicesCard/ServicesCard'
import ServicesCardImg1 from '../assets/images/servicesCard1.webp'
import Sec2 from '../components/Sec2/Sec2'
import FooterForm from '../components/FooterForm/FooterForm'
import Sec3 from '../components/Sec3/Sec3'
import Counter from '../components/Counter/Counter'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import { Container, Row } from 'react-bootstrap'

const Home = ({ openModal }) => {
    const servicesCardsData = [
        {
            icon: <i className="ri-git-repository-fill"></i>,
            heading: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
            img: ServicesCardImg1,
        },
        {
            icon: <i className="ri-pencil-ruler-fill"></i>,
            heading: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
            img: ServicesCardImg1,
        },
        {
            icon: <i className="ri-verified-badge-fill"></i>,
            heading: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
            img: ServicesCardImg1,
        },
        {
            icon: <i className="ri-certificate-2-fill"></i>,
            heading: "Lorem ipsum dolor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
            img: ServicesCardImg1,
        }
    ]
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
            <Seo title="Home" description="Welcome to homepage" />
            <Hero MainHeading={"New Author book"} name={"primary-hero"} Content={<>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="hero-bottom-data-left">
                            <p>Lorem ipsum dolor sit <span>amet consectetur</span> adipiscing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <Btn onClick={openModal} text="Lorem ipsum" name="primary" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="hero-bottom-data-img">
                            <img className='img-fluid' src={HeroHomeImg} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="hero-bottom-data-right">
                            <div className="hero-bottom-top-quote">
                                <i className="ri-double-quotes-l"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="hero-bottom-bottom-quote">
                                <i className="ri-double-quotes-r"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>} />

            <Brands />

            <section className='ServicesCard'>
                <div className="heading center">
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="container">
                    <div className="ServicesCardMain">
                        {servicesCardsData.map((data, idx) => {
                            return <ServicesCard key={idx} heading={data.heading} para={data.para} icon={data.icon} img={data.img} />
                        })}

                    </div>
                </div>

            </section>
            {/* <Sec2 /> */}

            <Sec3 heading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."} para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} openModal={openModal} />

            <section className="Review">
                <div className="heading center">
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* <Container> */}
                    <ReviewCard data={reviewData} />
                {/* </Container> */}
            </section>

            <Counter />

            <FooterForm />
        </>
    )
}

export default Home
