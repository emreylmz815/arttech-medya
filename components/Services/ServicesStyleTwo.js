import React, { Component } from 'react';
import Link from 'next/link';

export default class ServicesStyleTwo extends Component {
    render() {
        return (
            <>
               <div className="bg-fcfbfb ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>HİZMETLERİMİZ</h2>
                            <p>Sizin için sunduğumuz hizmelerimize aşağıdan göz atın.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        
                                            <a>GRAFİK TASARIM</a>
                                       
                                    </h3>
                                    <p>Bütün tasarım işlerinizde yaratıcı ve yenilikçi bakış açısıyla yaklaşıyor, uygulama sürecinde de hızlı ve yaratıcı destek sunuyoruz.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                       
                                            <a>WEB TASARIM</a>
                                        
                                    </h3>
                                    <p>Firmanızı dijitalde yansıtacak olan web tasarımınızdır.İhtiyaçlarınızı inceleyerek size uygun tasarlayalım. </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        
                                            <a>DİJİTAL PAZARLAMA</a>
                                        
                                    </h3>
                                    <p>Stratejiniz doğrultusunda istenilen hedef kitlenize ulaşalım.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                       
                                            <a>SOSYAL MEDYA</a>
                                       
                                    </h3>
                                    <p>Sosyal medya yönetimi , firmanızın ihtiyaçlarına cevap verecek, hedef kitleniz ile aranızda bağ kurmak için, efektif ve kalıcı bir yöntemdir.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        
                                            <a>eTİCARET</a>
                                       
                                    </h3>
                                    <p>Ürünlerinizin doğru ve etkili bir şekilde görüntülenmesi ve satılması için gerekli olan tüm süreçleri yönetiyoruz.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        
                                            <a>KURUMSAL KİMLİK</a>
                                        
                                    </h3>
                                    <p>Kurumsal kimlik firmanızın müşterin elinde bulanan reklamınızdır. Sizi anlayan bir tasarım ile firmanız daha doğru yansıtılır. </p>
                                </div>
                            </div>
                      
                  

                            {/* <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-headphones bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>IT Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-users bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Social Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-comment bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Admin Support</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
