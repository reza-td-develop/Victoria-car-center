import { createSlice } from "@reduxjs/toolkit";

const RimSlice = createSlice({
    name: "RimSlice",
    initialState: {
        material: {
            map: "../../public/textures/car/tire2/Substance_Graph_BaseColor.jpg",
            normalMap: "../../public/textures/car/tire2/Substance_Graph_Normal.jpg",
            roughnessMap: "../../public/textures/car/tire2/Substance_Graph_Roughness.jpg",
            aoMap: "../../public/textures/car/tire2/Substance_Graph_AmbientOcclusion.jpg",
        }
    },
})

export default RimSlice;



