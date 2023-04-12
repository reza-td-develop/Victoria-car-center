import React from 'react';
import { ShopProductList } from '../../../ProductStore/ProductStore';
import ProductItem from "./ProductItem"


export default function Listing1() {
    return (
        <>
            <ProductItem id={ShopProductList[0].id} image={ShopProductList[0].picture} group={ShopProductList[0].group} title={ShopProductList[0].title} price={ShopProductList[0].price} />
            <ProductItem id={ShopProductList[1].id} image={ShopProductList[1].picture} group={ShopProductList[1].group} title={ShopProductList[1].title} price={ShopProductList[1].price} />
            <ProductItem id={ShopProductList[2].id} image={ShopProductList[2].picture} group={ShopProductList[2].group} title={ShopProductList[2].title} price={ShopProductList[2].price} />
            <ProductItem id={ShopProductList[3].id} image={ShopProductList[3].picture} group={ShopProductList[3].group} title={ShopProductList[3].title} price={ShopProductList[3].price} />
        </>
    )
}
