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
                  <a href="#"><i className="ri-linkedin-fill"></i></a>
                  <a href="#"><i className="ri-twitter-x-line"></i></a>
                  <a href="#"><i className="ri-instagram-line"></i></a>
                  <a href="#"><i className="ri-facebook-fill"></i></a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="footer-nav">
                <div className="footer-nav-box">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div className="footer-nav-box">
                  <h4>Services</h4>
                  <ul>
                    <li><a href="#">eBook Cover Design</a></li>
                    <li><a href="#">eBook Editing</a></li>
                    <li><a href="#">eBook Writng</a></li>
                    <li><a href="#">eBook Publishing</a></li>
                    <li><a href="#">eBook Marketing</a></li>
                  </ul>
                </div>
                <div className="footer-nav-box">
                  <h4>Genre</h4>
                  <ul>
                    <li><a href="#">Autobiography</a></li>
                    <li><a href="#">Business Book</a></li>
                    <li><a href="#">Children’s Book</a></li>
                    <li><a href="#">Fiction</a></li>
                    <li><a href="#">Mystery Book</a></li>
                    <li><a href="#">Non Fiction</a></li>
                    <li><a href="#">Novel</a></li>
                    <li><a href="#">Self Help</a></li>
                  </ul>
                </div>
                <div className="footer-nav-box">
                  <h4>Contact Us</h4>
                  <ul>
                    <li><a href="#">Dummy</a></li>
                    <li><a href="#">(0000)00000-000</a></li>
                    <li><a href="#">xyz@addreess</a></li>
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
