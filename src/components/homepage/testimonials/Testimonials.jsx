import React from "react";
import TestimonialsItem from "./TestimonialsItem";
import {TestimonialsItems} from "./TestimonialsStore";

export default function Testimonials() {
    return (
        <section
            className="module bg-dark-60 parallax-bg bg-gradient-sp"
            style={{backgroundPosition: "50% 15%"}}>
            <div className="container">
                <div className="row multi-columns-row baseline-flex">
                    {TestimonialsItems.map((testItem) => (
                        <TestimonialsItem key={testItem.id} item={testItem} />
                    ))}
                </div>
            </div>
        </section>
    );
}
