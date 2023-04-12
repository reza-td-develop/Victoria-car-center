import React from 'react';
import { useSelector } from 'react-redux'

export default function TotalCheckout() {
    const cart = useSelector((state) => state.cartReducer.cart)
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        console.log(cart)
        return { totalPrice, totalQuantity };
    };

    var shippingcost;
    if (getTotal().totalPrice > 1000) {
        shippingcost = 0
    } else { shippingcost = 15 };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting form: Cart Subtotal: ${getTotal().totalPrice}, Shipping Total: ${shippingcost}, Total: ${getTotal().totalPrice + shippingcost}`);
    }
    return (
        <form onSubmit={handleSubmit} className="form rqst-form" role="form" action="#">
            <div className="row mt-70">
                <div className="col-sm-5 col-sm-offset-7">
                    <div className="shop-Cart-totalbox">
                        <h4 className="font-alt">Cart Totals</h4>
                        <table className="table table-striped table-border checkout-table">
                            <tbody>
                                <tr>
                                    <th>Cart Subtotal :</th>
                                    <td>${getTotal().totalPrice}</td>
                                </tr>
                                <tr>
                                    <th>Shipping Total : (Free for +$1000 orders)</th>
                                    <td>{shippingcost}</td>
                                </tr>
                                <tr className="shop-Cart-totalprice">
                                    <th>Total :</th>
                                    <td>${getTotal().totalPrice + shippingcost}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-lg btn-block btn-round btn-d" type="submit">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
