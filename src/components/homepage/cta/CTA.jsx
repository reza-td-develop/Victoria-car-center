import React from 'react';
import CTAForm from './CTAForm';

export default function CTA() {
  return (
    <section className="module bg-dark-60 request-cta bg-gradient-sp">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 className="font-alt">Request a call back</h2>
            <p>Our experts are ready to answer your requests in the shortest possible time in the fields of sales, technical, warranty, etc. Just send a request with details and wait for the experts to call.</p>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <CTAForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
