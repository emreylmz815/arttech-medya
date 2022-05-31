import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <span>ŞİMDİ Ne Yapıyoruz?</span>
                        <h3>Hazır mısınız?<br></br> Hadi beraber çalışalım!</h3>
                    </div>

                    <div className="cta-btn-box">
                        <Link href="/contact">
                            <a className="custom-btn">İletişim</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;