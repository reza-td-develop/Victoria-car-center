import React from 'react'
import AboutText from './AboutText'

export default function About() {
  return (
    <section className="module pt-0 pb-0" id="about">
      <div className="row position-relative m-0">
        <div className="col-xs-12 col-md-6 p-0 side-image" />
        <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
          <div className="row">
            <AboutText />
          </div>
        </div>
      </div>
    </section>
  )
}
