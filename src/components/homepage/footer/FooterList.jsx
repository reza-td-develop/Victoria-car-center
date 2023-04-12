import React from 'react'

export default function FooterList({FooterTitle, FooterHref1, FooterHref2, FooterHref3, FooterHref4, FooterHref5, FooterTitle1, FooterTitle2, FooterTitle3, FooterTitle4, FooterTitle5}) {
    return (
        <div className="col-sm-3">
            <div className="widget">
                <h5 className="widget-title font-alt">{FooterTitle}</h5>
                <ul className="icon-list">
                    <li><a href={FooterHref1}>{FooterTitle1}</a></li>
                    <li><a href={FooterHref2}>{FooterTitle2}</a></li>
                    <li><a href={FooterHref3}>{FooterTitle3}</a></li>
                </ul>
            </div>
        </div>
    )
}
