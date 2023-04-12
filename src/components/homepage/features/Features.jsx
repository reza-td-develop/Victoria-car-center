import React from 'react';
import FeatureItem1 from './FeatureItem1';
import FeatureItem2 from './FeatureItem2';

export default function Features() {
  return (
    <section className="module" id="alt-features">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2 className="module-title font-alt">Why Victoria</h2>
            <div className="module-subtitle font-serif">Many car service centers in the city are even more established and famous than us. But why Victoria?</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3">
            <FeatureItem1 />
          </div>
          <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
            <div className="alt-services-image align-center"><img className="middle-picture" src="assets/images/engine_3d_1(1).png" alt="Feature Image" /></div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <FeatureItem2 />
          </div>
        </div>
      </div>
    </section>
  )
}
