import React from 'react';
import AdBannerSmall1 from './AdBannerSmall1';
import AdBannerSmall2 from './AdBannerSmall2';

export default function AdBannersmall() {
    return (
        <div className="col-lg-4 col-12">
            <div className="row">
                <AdBannerSmall1 />
                <AdBannerSmall2 />
            </div>
        </div>
    )
}
