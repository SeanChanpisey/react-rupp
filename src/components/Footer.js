import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="padding-large">
        <div className="container">
          <div className="row">
            <div className="footer-top-area">
              <div className="row d-flex flex-wrap justify-content-between">
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu">
                    <img
                      src="images/main-logo.png"
                      alt="logo"
                      className="img-fluid mb-2"
                    />
                    <p>
                      Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                      hendrerit. Gravida massa volutpat aenean odio erat nullam
                      fringilla.
                    </p>
                    <div className="social-links">
                      <ul className="d-flex list-unstyled">
                        <li>
                          <a href="https://www.facebook.com/smos.konzii">
                            <svg className="facebook">
                              <use xlinkHref="#facebook" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/sean_chanpisey/">
                            <svg className="instagram">
                              <use xlinkHref="#instagram" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg className="twitter">
                              <use xlinkHref="#twitter" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg className="linkedin">
                              <use xlinkHref="#linkedin" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/@Chanpisey134">
                            <svg className="youtube">
                              <use xlinkHref="#youtube" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 pb-3">
                  <div className="footer-menu text-capitalize">
                    <h5 className="widget-title pb-2">Quick Links</h5>
                    <ul className="menu-list list-unstyled text-capitalize">
                      <li className="menu-item mb-1">
                        <a href="#">Home</a>
                      </li>
                      <li className="menu-item mb-1">
                        <a href="#">About</a>
                      </li>

                      <li className="menu-item mb-1">
                        <a href="#">Help</a>
                      </li>
                      <li className="menu-item mb-1">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu text-capitalize">
                    <h5 className="widget-title pb-2">Help &amp; Info Help</h5>
                    <ul className="menu-list list-unstyled">
                      <li className="menu-item mb-1">
                        <a href="#">Track Your Order</a>
                      </li>
                      <li className="menu-item mb-1">
                        <a href="#">Returns Policies</a>
                      </li>
                      <li className="menu-item mb-1">
                        <a href="#">Shipping + Delivery</a>
                      </li>
                      <li className="menu-item mb-1">
                        <a href="#">Contact Us</a>
                      </li>
                      <li className="menu-item mb-1">
                        <a href="#">Faqs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu contact-item ">
                    <h5 className="widget-title text-capitalize pb-2">
                      Contact Us
                    </h5>
                    <p>
                      Do you have any queries or suggestions?{" "}
                      <a href="mailto:" className="text-decoration-underline">
                        chanpisey0022@gmail.com
                      </a>
                    </p>
                    <p>
                      If you need support? Just give us a call.{" "}
                      <a href="#" className="text-decoration-underline">
                        +885 89609122
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );

}
export default Footer;