import React from 'react';
import { incrementQuantity, decrementQuantity, removeItem } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function CheckoutItem({ id, image, title, price, quantity = 0 }) {
    const dispatch = useDispatch()
    return (
        <tr key={id} id={id} className='tr-listing'>
            <td className=""><a href="#"><img src={image} /></a></td>
            <td>
                <h5 className="product-title font-alt">{title}</h5>
            </td>
            <td className="">
                <h5 className="product-title font-alt">${quantity * price}</h5>
            </td>
            <td className="quantity-btn">
                <button className='btn btn-responsive btn-border-d btn-circle' onClick={() => dispatch(decrementQuantity(id))}>-</button>
                <h5 className="product-title font-alt">{quantity}</h5>
                <button className='btn btn-responsive btn-border-d btn-circle' onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </td>
            <td className="pr-remove"><a href="#" title="Remove"><i onClick={() => dispatch(removeItem(id))} className="fa fa-times"></i></a></td>
        </tr>
    )
}
