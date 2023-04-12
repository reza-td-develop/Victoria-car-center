import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import Listing1 from './Listing/Listing1';
import Listing2 from './Listing/Listing2';
import Listing3 from './Listing/Listing3';
import Reservation from './Reservation/Reservation';
import Footer from '../homepage/footer/Footer';
import AdBannerLarge from './AdBanner/AdBannerLarge';
import AdBannersmall from './AdBanner/AdBannersmall';
import Presentation from './Presentation/Presentation';
import Navbar from '../homepage/navbar/Navbar';

export default function ShopPage() {
    return (
        <main>
            <Navbar />
            <HeroBanner />
            <section className="trending-product section font-rob mt-10">
                <div className="container">
                    <div className="row">
                        <Listing1 />
                    </div>
                </div>
                <div className="row button-final">
                </div>
            </section>
            <section className="hero-area">
                <div className="container-fluid">
                    <div className="row">
                        <AdBannerLarge />
                        <AdBannersmall />
                    </div>
                </div>
            </section>
            <section className="trending-product section mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Product</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Listing2 />
                    </div>
                </div>
            </section>
            <Presentation />
            <section className="trending-product section mt-10">
                <div className="container">
                    <div className="row">
                        <Listing3 />

                    </div>
                </div>
                <div className="row button-final">
                </div>
            </section>
            <Reservation />
            <Footer />
            <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
        </main>
    )
}
