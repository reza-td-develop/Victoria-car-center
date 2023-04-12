import React from 'react';
import Header from './Header';
import CheckoutList from './CheckoutList';
import TotalCheckout from './TotalCheckout';
import Footer from "../../homepage/footer/Footer";

export default function Checkout() {
    return (
        <div className="main">
            <section className="module">
                <div className="container">
                    <Header />
                    <hr className="divider-w pt-20" />
                    <CheckoutList />
                    <hr className="divider-w" />
                    <TotalCheckout />
                </div>
            </section>
            <Footer />
        </div>
    )
}
