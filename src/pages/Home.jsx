import React from 'react'
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import HeroHomeImg from "../assets/images/hero-home.webp"
import HeroHomeImgCircle from "../assets/images/hero-shadow.webp"
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
                    trigger: ".primary-hero",
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            tl.from(".hero-heading", { y: -50, opacity: 0 })
                .from(".hero-heading h1", { y: -20, opacity: 0 }, "=0.6")
                .from(".hero-bottom-data-left", { x: -100, opacity: 0 }, "<")
                // .from(".hero-bottom-data-images ", { scale: 0, opacity: 0, ease: "back.out(1.6)", duration: 1, stagger: 0.8 }, "<")
                .from(".hero-bottom-data-right", { x: 100, opacity: 0 }, "<");

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



            gsap.fromTo(".ServiceCard",
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".ServicesCardMain",
                        start: "top 85%",

                    }
                }
            );

            // Section 3
            gsap.from(".sec3Data", {
                scrollTrigger: {
                    trigger: ".sec3",
                    start: "top 80%",
                },
                x: 40,
                opacity: 0,
                duration: 1
            });
            // Floating Sec3 Image (Kept separate from reveal so it doesn't block)
            gsap.to(".sec3Img img", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            // --- FOOTER SECTION TIMELINE ---
            const footerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footerFrom", // The main container
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            footerTl.from(".footerFrom .footerFormLeft img", {
                y: 40,            // Slides UP from 40px below
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            })
                .from(".footerFrom .footerFormData", {
                    y: 40,            // Slides UP from 40px below
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.7"); // This "-=0.7" creates a slight overlap so they feel connected

        }, mainRef);

        return () => ctx.revert();
    }, []);




    return (
        <>
            <Seo title="Home" description="Welcome to homepage" />
            <div ref={mainRef}>
                <Hero MainHeading={"New Author book"} name={"primary-hero"} Content={<>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="hero-bottom-data-left">
                                <p>Lorem ipsum dolor sit <span>amet consectetur</span> adipiscing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <Btn onClick={openModal} text="Lorem ipsum" name="primary" />
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="hero-bottom-data-images">
                                <div className="hero-bottom-data-img">
                                    <img className='img-fluid' src={HeroHomeImg} alt="" />
                                </div>
                                <div className="hero-bottom-data-shadow">
                                    <img className='img-fluid' src={HeroHomeImgCircle} alt="" />
                                </div>
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
            </div>

        </>
    )
}

export default Home
