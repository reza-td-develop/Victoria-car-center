import React from 'react'

export default function FooterPostCard({cardImg, cardHref, cardTtile, cardDate}) {
    return (
        <li className="clearfix">
            <div className="widget-posts-image"><a href={cardHref}><img src={cardImg} alt="Post Thumbnail" /></a></div>
            <div className="widget-posts-body">
                <div className="widget-posts-title"><a href={cardHref}>{cardTtile}</a></div>
                <div className="widget-posts-meta">{cardDate}</div>
            </div>
        </li>
    )
}
