import { Link, NavLink } from 'react-router-dom'
import footerLogo from '../../assets/images/Logo.webp'
const Footer = () => {
  return (
    <>
      {/* <FooterForm /> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-data">
                <div className="footer-logo">
                  <img className='img-fluid' src={footerLogo} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                <div className="footer-icons">
                  <NavLink to={''}><i className="ri-linkedin-fill"></i></NavLink>
                  <NavLink to={''}><i className="ri-twitter-x-line"></i></NavLink>
                  <NavLink to={''}><i className="ri-instagram-line"></i></NavLink>
                  <NavLink to={''}><i className="ri-facebook-fill"></i></NavLink>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="footer-nav">
                <div className="footer-nav-box">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About Us</NavLink></li>
                    <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
                  </ul>
                </div>
                <div className="footer-nav-box">
                  <h4>Services</h4>
                  <ul>
                    <li><NavLink to={'/services/ebook-cover-design'}>eBook Cover Design</NavLink></li>
                    <li><NavLink to={'/services/ebook-editing'}>eBook Editing</NavLink></li>
                    <li><NavLink to={'/services/ebook-writng'}>eBook Writng</NavLink></li>
                    <li><NavLink to={'/services/ebook-publishing'}>eBook Publishing</NavLink></li>
                    <li><NavLink to={'/services/ebook-marketing'}>eBook Marketing</NavLink></li>
                  </ul>
                </div>
                <div className="footer-nav-box">
                  <h4>Genre</h4>
                  <ul>
                    <li><NavLink to={'/genre/autobiography'}>Autobiography</NavLink></li>
                    <li><NavLink to={'/genre/business-book'}>Business Book</NavLink></li>
                    <li><NavLink to={'/genre/childrens-book'}>Children’s Book</NavLink></li>
                    <li><NavLink to={'/genre/fiction'}>Fiction</NavLink></li>
                    <li><NavLink to={'/genre/mystery-book'}>Mystery Book</NavLink></li>
                    <li><NavLink to={'/genre/non-fiction'}>Non Fiction</NavLink></li>
                    <li><NavLink to={'/genre/novel'}>Novel</NavLink></li>
                    <li><NavLink to={'/genre/self-help'}>Self Help</NavLink></li>
                  </ul>
                </div>
                <div className="footer-nav-box">
                  <h4>Contact Us</h4>
                  <ul>
                    <li><Link >Dummy</Link></li>
                    <li><Link >(0000)00000-000</Link></li>
                    <li><Link >xyz@addreess</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p><span>©</span> 2026 Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla facilisi.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
