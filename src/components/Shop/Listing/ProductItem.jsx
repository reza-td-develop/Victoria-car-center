import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

export default function Item({ id, image, title, price, group }) {
    const dispatch = useDispatch()
    return (
        <div key={id} className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
                <div className="product-image">
                    <img src={image} alt="#" />
                    <div className="button">
                        <a className="btn btn-b btn-circle shopping-a" onClick={() =>
                            dispatch(addToCart({
                                id, title, image, price
                            }))
                        } ><i className="icon-basket"></i> Add to Cart</a>
                    </div>
                </div>
                <div className="product-info">
                    <span className="category">{group}</span>
                    <h4 className="title">
                        <a href="product-grids.html">{title}</a>
                    </h4>
                    <div className="price">
                        <span>$ {price}</span>

                    </div>
                </div>
            </div>

        </div>
    )
}
