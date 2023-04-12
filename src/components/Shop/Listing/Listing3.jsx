import React from 'react';
import { ShopProductList } from '../../../ProductStore/ProductStore';
import ProductItem from "./ProductItem"


export default function Listing1() {
    return (
        <>
            <ProductItem id={ShopProductList[12].id} image={ShopProductList[12].picture} group={ShopProductList[12].group} title={ShopProductList[12].title} price={ShopProductList[12].price} />
            <ProductItem id={ShopProductList[13].id} image={ShopProductList[13].picture} group={ShopProductList[13].group} title={ShopProductList[13].title} price={ShopProductList[13].price} />
            <ProductItem id={ShopProductList[14].id} image={ShopProductList[14].picture} group={ShopProductList[14].group} title={ShopProductList[14].title} price={ShopProductList[14].price} />
            {/* <ProductItem id={ShopProductList[15].id} image={ShopProductList[15].picture} group={ShopProductList[15].group} title={ShopProductList[15].title} price={ShopProductList[15].price} /> */}
        </>
    )
}
