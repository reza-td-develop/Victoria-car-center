import React from "react";
import {Route, Routes} from "react-router-dom";
import Blog from "./components/homepage/blog/Blog";
import HomePage from "./components/homepage/HomePage";
import ShopPage from "./components/Shop/ShopPage";
import Checkout from "./components/Shop/Checkout/Checkout";
import CarConfigurator from "./components/CarConfigurator/CarConfigurator";
import RimPanel from "./components/CarConfigurator/controlPanelV2/RimPanel";
import NewBeta from "./components/CarConfigurator/NewBeta";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/carconfigurator" element={<CarConfigurator />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    );
}
