import React from 'react';
import { ShopProductList } from '../../../ProductStore/ProductStore';

export default function AdBannerSmall1() {
    return (
        <div className="col-lg-12 col-md-6 col-12 md-custom-padding">

            <div className="hero-small-banner hero-back">
                <div className="content backimg5">
                    <h2>
                        <span>Lorem ipsum dolor sit amet</span>
                        {ShopProductList[13].title}
                    </h2>
                    <h3>{ShopProductList[13].price}</h3>
                </div>
            </div>

        </div>
    )
}
