import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img2.jpg" alt="image" className="rounded-10" />

                                    {/* <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>Hakkımızda</h2>
                                    </div>

                                    <div className="about-text">
                                        <h4>Biz Kimiz</h4>
                                        <p>

Sıkıcı ve süregeleni reddeden, hayatta farklılık ve yenilik arayan, ufuk açıcı ve kreatif fikirlere sahip, alanında etkili ve yetkin bir ekibiz.
</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Hikayemiz</h4>
                                        <p>Sektörü ve yapılan işleri çok yakından takip eden firmamız eksiklikleri bilen ve bunun için dijital medya sektörüne fark katmaya gelmiştir.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Misyon</h4>
                                        <ul>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Her zaman daha ileriye!
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Her zaman daha iyiye!
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Her zaman daha yükseklere!
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='_ysd-zHamjk' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default About;