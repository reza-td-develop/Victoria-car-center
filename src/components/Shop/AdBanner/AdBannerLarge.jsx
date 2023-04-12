import React from 'react';
import { ShopProductList } from '../../../ProductStore/ProductStore';

export default function AdBannerLarge() {
    return (

        <div className="col-lg-8 col-12 custom-padding-right">
            <div className="slider-head">

                <div className="hero-slider hero-back">
                    <div className="single-slider">
                        <div className="content backimg4">
                            <h2><span>Lorem ipsum dolor sit amet</span>
                                {ShopProductList[11].title}
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <h3><span>Now Only</span>{ShopProductList[11].price}</h3>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
