import React from 'react';
import CheckoutHeader from './CheckoutHeader';
import CheckoutItem from "./CheckoutItem";
import { useSelector } from 'react-redux';


export default function CheckoutList() {
    const cart = useSelector((state) => state.cartReducer.cart)
    return (
        <div className="row">
            <div className="col-sm-12">
                <table className="table table-striped table-border checkout-table">
                    <tbody>
                        <CheckoutHeader />
                        {cart?.map((item) => (
                            <CheckoutItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



