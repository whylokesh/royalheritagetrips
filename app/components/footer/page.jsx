import React from 'react'

const Footer = () => {
    return (
        <>
            {/* // < !--==================== FOOTER ==================== --> */}
            <footer className="footer">
                <div className="footer__container container grid">
                    <div className="footer__content grid">
                        <div>
                            <a href="#" className="footer__logo">Travel</a>

                            <p className="footer__description">
                                Travel with us and explore <br />
                                the world without limits.
                            </p>
                        </div>

                        <div className="footer__data grid">
                            <div>
                                <h3 className="footer__title">About</h3>

                                <ul className="footer__links">
                                    <li>
                                        <a href="#" className="footer__link">About Us</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">Features</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">News & Blog</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="footer__title">Company</h3>

                                <ul className="footer__links">
                                    <li>
                                        <a href="#" className="footer__link">FAQs</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">History</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">Testimonials</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="footer__title">Contact</h3>

                                <ul className="footer__links">
                                    <li>
                                        <a href="#" className="footer__link">Call Center</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">Support Center</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="footer__title">Support</h3>

                                <ul className="footer__links">
                                    <li>
                                        <a href="#" className="footer__link">Privacy Policy</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">Terms & Services</a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer__link">Payments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer__group">
                        <div className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                <i className="ri-facebook-line"></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <i className="ri-twitter-line"></i>
                            </a>

                            <a href="https://www.youtube.com/" target="_blank" className="footer__social-link">
                                <i className="ri-youtube-line"></i>
                            </a>
                        </div>

                        <span className="footer__copy">
                            &#169; Copyright Bedimcode. All rights reserved
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer