import React, { useLayoutEffect, useRef } from 'react'
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import ServiceHero from '../assets/images/service-hero.webp'
import HeroHomeImgshadow from "../assets/images/hero-shadow.webp"
import Brands from '../components/Brands/Brands'
import FooterForm from '../components/FooterForm/FooterForm'
import Sec2 from '../components/Sec2/Sec2'
import { Container } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import Counter from '../components/Counter/Counter'
import ServiceSec1 from '../components/ServiceSec1/ServiceSec1'
import gsap from 'gsap'

const Services = ({ openModal }) => {
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



            // Services Section 1
            const serviceSec1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".servicesec1", // The main container
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });


            serviceSec1.from(".servicesec1 .servicesec1Left", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            })
                .from(".servicesec1 .servicesec1Right", {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.7");


            // Section 2
            const service2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".book-info-section", // The main container
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            service2.from(".full-edge-bg", {
                x: 100,            // Slides UP from 40px below
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                // ease: "power2.out"
            })

            gsap.to(".book-img-container .book-img-book img", {
                y: -20,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            gsap.to(".book-img-container .book-img-shadow img", {
                scale: 0.8,
                opacity: 0.5,
                duration: 1.5,
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
            <Seo title={"Service"} description={"Welcome to homepage"} />
            <div ref={mainRef}>
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
                            <div className="hero-bottom-data-images">
                                <div className="hero-bottom-data-img">
                                    <img className='img-fluid' src={ServiceHero} alt="" />
                                </div>
                                <div className="hero-bottom-data-shadow">
                                    <img className='img-fluid' src={HeroHomeImgshadow} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </>} />
                <Brands />

                <ServiceSec1 />

                <Sec2 openModal={openModal} />

                {/* Review Slider */}
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

export default Services
