import React, {useCallback, useState} from "react";
import {PortfolioList} from "./PortfolioStore";
import {Link} from "react-router-dom";
import ReactResponsiveGallery, {PhotoAlbum} from "react-responsive-gallery";

export default function Portfolio() {
    const [images, setImages] = useState(PortfolioList);

    const handleFilter =
        (filterType = "") =>
        () => {
            switch (filterType) {
                case "all":
                    setImages(PortfolioList);
                    break;
                case "rim":
                case "light":
                case "service":
                case "part":
                    setImages(
                        PortfolioList.filter((p) =>
                            p.kind.includes(filterType),
                        ),
                    );
                    break;
                default:
                    setImages(PortfolioList);
                    break;
            }
        };

    return (
        <section className="module" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <ul className="filter font-alt" id="filters">
                            <div>
                                <h2 className="font-alt module-title mb-10">
                                    What we do
                                </h2>
                            </div>
                            <a
                                onClick={handleFilter("all")}
                                className="wow fadeInUp cursor-pointer" style={{margin:"0 30px"}}>
                                All
                            </a>
                            <a
                                onClick={handleFilter("rim")}
                                className="wow fadeInUp cursor-pointer" style={{margin:"0 30px"}}>
                                rim
                            </a>
                            <a
                                onClick={handleFilter("light")}
                                className="wow fadeInUp cursor-pointer" style={{margin:"0 30px"}}>
                                Light
                            </a>
                            <a
                                onClick={handleFilter("service")}
                                className="wow fadeInUp cursor-pointer" style={{margin:"0 30px"}}>
                                Service
                            </a>
                            <a
                                onClick={handleFilter("part")}
                                className="wow fadeInUp cursor-pointer" style={{margin:"0 30px"}}>
                                Part
                            </a>
                        </ul>
                    </div>
                </div>
                {/* <ul className="works-grid works-grid-masonry works-grid-3 works-hover-d" id="works-grid">
                    <Pictures />
                </ul> */}
                <div
                    className=""
                    id="div-images-container"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Link to="/shop">
                    <ReactResponsiveGallery useLightBox={true} images={images} />
                    </Link>
                </div>
                <div
                    className="row mt-80"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                    <Link to="/shop">
                        <button className="finish btn btn-border-d btn-circle col-6">
                            See more
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
