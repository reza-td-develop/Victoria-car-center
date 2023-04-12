import React from "react";
import CountUp from "react-countup";

export default function TestimonialsItem({item}) {
    return (
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="count-item mb-sm-40">
                <div className="count-icon">
                    <span>
                        <img src={item?.imgSrc} alt={item?.imgAlt} />
                    </span>
                </div>
                <h3 className="count-to font-alt">
                    <CountUp duration={10} delay={0} enableScrollSpy={true} end={item.imgDataCount} />
                </h3>
                <h5 className="count-title font-serif">{item?.imgTitle}</h5>
            </div>
        </div>
    );
}
