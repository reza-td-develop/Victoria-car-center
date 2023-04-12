import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cartSlice";
import ConfiguratorSlice from "./ConfiguratorSlice";

export const store = configureStore({
    reducer: {
        cartReducer,
        configurator: ConfiguratorSlice.reducer,
    },
});
