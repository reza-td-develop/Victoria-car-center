import React from 'react'
import { Link } from 'react-router-dom'
import ControlPanelOption from './ControlPanelOption'

export default function ControlPanelHeader() {
    return (
        <div className='configurator-header'>
            <ControlPanelOption className="configurator-option title-option" img="/assets/images/peo 3.png" title="Rim" info="Types & Colors" />
            <ControlPanelOption className="configurator-option title-option" img="/assets/images/peo 3.png" title="Body Color" info="Metallic, classic, etc." />
            <ControlPanelOption className="configurator-option title-option" img="/assets/images/peo 3.png" title="Mirror" info="Color" />
            <ControlPanelOption className="configurator-option title-option" img="/assets/images/peo 3.png" title="Lights" info="Color" />
        </div>
    )
}
