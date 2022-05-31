import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Hizmetlerimiz" 
                    BGImage="bg-two"
                />  

                <ServicesStyleTwo />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Services2;