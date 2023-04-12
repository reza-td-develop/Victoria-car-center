import React from 'react';
import BlogItem from './BlogItem';

export default function Blog() {
  return (
    <section className="module" id="news">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2 className="module-title font-alt">Latest blog posts</h2>
            <div className="module-subtitle font-serif">We'll be with you every week with an fascinating article from the car world.</div>
          </div>
        </div>
        <div className="row multi-columns-row post-columns">
          <BlogItem />
        </div>
      </div>
    </section>
  )
}
