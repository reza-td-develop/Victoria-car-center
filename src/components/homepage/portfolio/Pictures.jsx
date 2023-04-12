import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioList } from "./PortfolioStore";

export default function Pictures() {
    return (
        PortfolioList.map((product) =>
            <li key={product.id} className={product.kind} ><Link to={product.toShop}>
                <div className="work-image"><img src={product.src} alt={product.alt} />
                </div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">{product.title}</h3>
                    <div className="work-descr">See more</div>
                </div>
            </Link>
            </li>
        )

    )
}

