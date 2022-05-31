import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Mail Adreslerimiz</h3>
                                <p><a href="mailto:iletisim@arttechmedya.com">iletisim@arttechmedya.com</a></p>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Ziyaret Edin</h3>
                                <p>Kalıcı konutlar Bağlantı Yolu Zahit Kevseri Bulvarı<br></br> No:29, Merkez / DÜZCE</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Bizi Arayın</h3>
                                <p><a href="444 1 498"></a>444 1 498</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;