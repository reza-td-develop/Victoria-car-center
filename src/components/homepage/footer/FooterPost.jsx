import React from 'react';
import FooterPostCard from './FooterPostCard';

export default function FooterPost() {
    return (
        <div className="col-sm-3">
            <div className="widget">
                <h5 className="widget-title font-alt">Popular Posts</h5>
                <ul className="widget-posts">
                    <FooterPostCard cardImg="assets/images/ThumbBlog/1.png" cardHref="#" cardTtile="lorem" cardDate="23 january" />
                    <FooterPostCard cardImg="assets/images/ThumbBlog/2.png" cardHref="#" cardTtile="Lorem" cardDate="15 February" />
                </ul>
            </div>
        </div>
    )
}
