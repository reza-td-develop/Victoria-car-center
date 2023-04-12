import React from 'react';
import { BlogInfo } from "./BlogStore";

export default function BlogItem() {
    return (
        BlogInfo.map((BlogCard) =>
            <div key={BlogCard.id} className="col-sm-6 col-md-4 col-lg-4">
                <div className="post mb-20">
                    <div className="post-thumbnail"><a href={BlogCard.link}><img src={BlogCard.img} alt={BlogCard.alt} /></a></div>
                    <div className="post-header font-alt">
                        <h2 className="post-title"><a href="#">{BlogCard.title}</a></h2>
                        <div className="post-meta"><a href="#">{BlogCard.author}</a>
                        </div>
                    </div>
                    <div className="post-entry">
                        <p>{BlogCard.info}</p>
                    </div>
                    <div className="post-more"><a className="more-link" href="#">Read more</a></div>
                </div>
            </div>
        )
    )
}
