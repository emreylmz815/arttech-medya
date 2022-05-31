import React, { Component } from 'react';

class WorkProcess extends Component {
    render() {
        return (
            <>
                <section className="work-process-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>İş Süreçlerimiz</h2>
                            <p>Herhangi bir projeye başlarken yaptığımız ön çalışma süreçleri.</p>
                        </div>

                        <div className="work-process">
                            <img src="/images/man-with-mobile.png" alt="logo" />

                            <div className="work-process-list">
                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display1"></i>
                                    </div>
                                    <h3>Ön Yüzey</h3>
                                    <span>Görsel Tasarım</span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display2"></i>
                                    </div>
                                    <h3>İskelet</h3>
                                    <span>Şekillendirme</span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-airplay"></i>
                                    </div>
                                    <h3>Uygulama Mimarisi</h3>
                                    <span>Ekran Çıktıları </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-note2"></i>
                                    </div>
                                    <h3>Kapsamlı Tarama</h3>
                                    <span>Gereksinimler</span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-light"></i>
                                    </div>
                                    <h3>Kullanıcı Araştırması</h3>
                                    <span>Hedef Kitle</span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-sun"></i>
                                    </div>
                                    <h3>Uygulama</h3>
                                    <span>Analiz</span>
                                </div>
                            </div>

                            <img src="/images/circle.png" className="rotateme circle-image" alt="image" />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WorkProcess;