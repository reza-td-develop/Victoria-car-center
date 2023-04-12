import { createSlice } from "@reduxjs/toolkit";
import RimPanel from "../components/CarConfigurator/controlPanelV2/RimPanel";

const ConfiguratorSlice = createSlice({
    name: "carConfigurator",
    initialState: {
        // material: {
        //     map: "textures/Light Metal/White_Marble_004_COLOR.jpg",
        //     normalMap: "textures/Light Metal/White_Marble_004_NORM.jpg",
        //     roughnessMap: "textures/Light Metal/White_Marble_004_ROUGH.jpg",
        //     aoMap: "textures/Light Metal/White_Marble_004_OCC.jpg",
        // },
        mesh: {
            geometry: "1",
            texture: "4",
            bodyTexture: "0"
        },
    },
    reducers: {
        redRimType1: (state) => {
            state.mesh.geometry = "1"
        },
        redRimType2: (state) => {
            state.mesh.geometry = "2"
        },
        redRimType3: (state) => {
            state.mesh.geometry = "3"
        },
        redRimType4: (state) => {
            state.mesh.geometry = "4"
        },
        redRimTexture1: (state) => {
            state.mesh.texture = "1"
        },
        redRimTexture2: (state) => {
            state.mesh.texture = "2"
        },
        redRimTexture3: (state) => {
            state.mesh.texture = "3"
        },
        redRimTexture4: (state) => {
            state.mesh.texture = "4"
        },
        redBodyTexture1: (state) => {
            state.mesh.bodyTexture = "1"
        },
        redBodyTexture2: (state) => {
            state.mesh.bodyTexture = "2"
        },
        redBodyTexture3: (state) => {
            state.mesh.bodyTexture = "3"
        }

    }
})

export const { redRimType1, redRimType2, redRimType3, redRimType4,redRimTexture1, redRimTexture2, redRimTexture3, redRimTexture4, redBodyTexture1, redBodyTexture2, redBodyTexture3 } = ConfiguratorSlice.actions;


export default ConfiguratorSlice;



