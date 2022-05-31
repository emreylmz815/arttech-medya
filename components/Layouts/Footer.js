import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/logo.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>Genç ve dinamik çalışma ekibimiz ile her zaman yeniyi takip ediyoruz. Sektörün gelişmelerinden haberdar ve takipçi ajansımız ile sizi güncel tutuyoruz.</p>

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="linkedin.com" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li> 
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Keşfedin</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Anasayfa</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Hakkımızda</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services-2">
                                                <a>Hizmetlerimiz</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>İletişim</a>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>Faq</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Bize Ulaşın</h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i>  Kalıcı konutlar Bağlantı Yolu Zahit Kevseri Bulvarı No:29, Merkez / DÜZCE</li>
                                        <li>
                                            <i className="icofont-live-support"></i> 
                                            <a href="tel:+324-9442-515">444 1 498</a>
                                        </li>
                                        {/* <li>
                                            <i className="icofont-envelope"></i> 
                                            <a href="mailto:hello@pungent.com">hello@pungent.com</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>  All Rights Reserved By <a href="http://www.arttech.com.tr/" target="_blank">ARTTECH </a>  MEDYA {currentYear} </p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;