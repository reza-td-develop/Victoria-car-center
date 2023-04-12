import React from 'react';
import { ShopProductList } from '../../../ProductStore/ProductStore';
import ProductItem from "./ProductItem"


export default function Listing1() {
    return (
        <>
            <ProductItem id={ShopProductList[4].id} image={ShopProductList[4].picture} group={ShopProductList[4].group} title={ShopProductList[4].title} price={ShopProductList[4].price} />
            <ProductItem id={ShopProductList[5].id} image={ShopProductList[5].picture} group={ShopProductList[5].group} title={ShopProductList[5].title} price={ShopProductList[5].price} />
            <ProductItem id={ShopProductList[6].id} image={ShopProductList[6].picture} group={ShopProductList[6].group} title={ShopProductList[6].title} price={ShopProductList[6].price} />
            <ProductItem id={ShopProductList[7].id} image={ShopProductList[7].picture} group={ShopProductList[7].group} title={ShopProductList[7].title} price={ShopProductList[7].price} />
            <ProductItem id={ShopProductList[8].id} image={ShopProductList[8].picture} group={ShopProductList[8].group} title={ShopProductList[8].title} price={ShopProductList[8].price} />
            <ProductItem id={ShopProductList[9].id} image={ShopProductList[9].picture} group={ShopProductList[9].group} title={ShopProductList[9].title} price={ShopProductList[9].price} />
            <ProductItem id={ShopProductList[10].id} image={ShopProductList[10].picture} group={ShopProductList[10].group} title={ShopProductList[10].title} price={ShopProductList[10].price} />
            <ProductItem id={ShopProductList[11].id} image={ShopProductList[11].picture} group={ShopProductList[11].group} title={ShopProductList[11].title} price={ShopProductList[11].price} />
        </>
    )
}
