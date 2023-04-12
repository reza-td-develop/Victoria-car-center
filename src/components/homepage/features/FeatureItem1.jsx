import React from 'react';
import { FeatureList1 } from './FeatureStore';

export default function FeatureItem1() {
    return (
        FeatureList1.map((Feature) =>
            <div key={Feature.id} className="alt-features-item">
                <div className="alt-features-icon"><span> <img src={Feature.imgSrc} alt={Feature.imgAlt} /> </span></div>
                <h3 className="alt-features-title font-alt">{Feature.imgAlt}</h3>{Feature.imgCaption}
            </div>
        )
    )
}




