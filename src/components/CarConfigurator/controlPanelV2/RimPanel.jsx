import React from 'react'
import ControlPanelOption from './ControlPanelOption'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { redRimType1, redRimType2, redRimType3, redRimType4, redRimTexture1, redRimTexture2, redRimTexture3, redRimTexture4, redBodyTexture1, redBodyTexture2, redBodyTexture3 } from '../../../redux/ConfiguratorSlice';

export default function RimPanel() {

    const dispatch = useDispatch();


    return (
        <div className='rim-main-panel'>
            <div className='rim-type-title'>RIM TYPE:</div>
            <div className='rim-type-option'>
                <ControlPanelOption onClick={() => dispatch(redRimType1())} img="/textures/RimTitle/ssr gtv02 silver.png" title="SSR GTV02" info="SSR GTV02" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redRimType2())} img="/textures/RimTitle/Kipardo 15x7 alloy.png" title="KIPARDO 15X7" info="KIPARDO 15X7" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redRimType3())} img="/textures/RimTitle/Speed Tapered UK.png" title="Tapered UK" info="Tapered UK" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redRimType4())} img="/textures/RimTitle/APEX ARC-8 racing.png" title="APEX ARC-8" info="APEX ARC-8" className="configurator-option rim-panel-option" />
            </div>
            <div className='rim-color-title'>RIM COLOR:</div>
            <div className='rim-color-option'>
                <ControlPanelOption onClick={() => dispatch(redRimTexture1())} img="/textures/Thumbnails/Marble Blue.png" title="Marble Blue" info="Marble Blue" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redRimTexture2())} img="/textures/Thumbnails/Golden Wave.png" title="Golden Wave" info="Golden Wave" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redRimTexture3())} img="/textures/Thumbnails/Scratched Metal.png" title="Scratched Metal" info="Scratched Metal" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redRimTexture4())} img="/textures/Thumbnails/Light Metal.png" title="Light Metal" info="Light Metal" className="configurator-option rim-panel-option" />
            </div>
            <div className='rim-color-title'>BODY COLOR:</div>
            <div className='rim-color-option'>
                <ControlPanelOption onClick={() => dispatch(redBodyTexture1())} img="/textures/Thumbnails/Orange Line.png" title="Orange Line" info="Orange Line" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redBodyTexture2())} img="/textures/Thumbnails/Metal.png" title="Milky White" info="Milky White" className="configurator-option rim-panel-option" />
                <ControlPanelOption onClick={() => dispatch(redBodyTexture3())} img="/textures/Thumbnails/Cube Base.png" title="Cube Base" info="Cube Base" className="configurator-option rim-panel-option" />
            </div>
        </div>
    )
}
