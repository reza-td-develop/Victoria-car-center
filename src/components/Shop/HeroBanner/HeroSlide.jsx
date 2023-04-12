import React from 'react'

export default function HeroSlide({className, service, title}) {
    return (
        <li className={className}>
            <div className="victoria-caption ">
                <div className="caption-content">
                    <div className="font-alt mb-30 victoria-title-size-1">{service}</div>
                    <div className="font-alt mb-40 victoria-title-size-4">{title}</div>
                </div>
            </div>
        </li>
    )
}
