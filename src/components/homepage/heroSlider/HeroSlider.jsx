import React from "react";
import {Link} from "react-router-dom";

export default function HeroSlider() {
    return (
        <section
            className="home-section home-header-section home-fade home-full-height bg-dark-60 agency-page-header"
            id="home">
            <div className="victoria-caption">
                <div className="caption-content center">
                    <div className="font-alt mb-30 victoria-title-size-1">
                        Grow your awesome idea
                    </div>
                    <div className="font-alt mb-40 victoria-title-size-3">
                        lets <span className="rotate">build</span>{" "}
                        your own car
                    </div>
                    <Link to="/carconfigurator">
                        <button className="section-scroll btn btn-border-w btn-circle">
                            Go to workspace
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
