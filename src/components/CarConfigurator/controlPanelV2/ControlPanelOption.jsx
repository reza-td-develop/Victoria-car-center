import React from 'react'

export default function ControlPanelOption({onClick, img, title, info, className}) {
    return (
        <div onClick={onClick} className={className}>
            <img className='configurator-option-img' src={img}></img>
            <div className='configurator-option-title'>{title}
                <span className='configurator-option-span'>{info}</span>
            </div>
        </div>
    )
}
