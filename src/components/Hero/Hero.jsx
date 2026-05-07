import './Hero.css'
import HeroHomeImg from '../../assets/images/hero-home.webp'
import Btn from '../Common/Btn'

const Hero = ({name, Content, MainHeading }) => {
    return (
        <section className={`hero ${name}`}>
            <div className="container">
                <div className="hero-heading">
                    <h1>{MainHeading}</h1>
                </div>
                <div className="hero-bottom-data">
                    {Content}
                </div>
                <Btn text={<>See What We Do<i className="ri-arrow-right-up-line"></i></>} name={"white hero-bottom-btn"} />
            </div>
        </section>
    )
}

export default Hero