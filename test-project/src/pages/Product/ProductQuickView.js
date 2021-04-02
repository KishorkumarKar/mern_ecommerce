import React, { Component } from 'react'

export class ProductQuickView extends Component {
    render() {
        return (
            <div className="modal fade" id="quick-look">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal--shadow">
                        <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal"></button>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-5">
                                    {/* <!--====== Product Breadcrumb ======--> */}
                                    <div className="pd-breadcrumb u-s-m-b-30">
                                        <ul className="pd-breadcrumb__list">
                                            <li className="has-separator">
                                                <a href="index.hml">Home</a>
                                            </li>
                                            <li className="has-separator">
                                                <a href="shop-side-version-2.html">Electronics</a>
                                            </li>
                                            <li className="has-separator">
                                                <a href="shop-side-version-2.html">DSLR Cameras</a>
                                            </li>
                                            <li className="is-marked">
                                                <a href="shop-side-version-2.html">Nikon Cameras</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!--====== End - Product Breadcrumb ======--> */}
                                    {/* <!--====== Product Detail ======--> */}
                                    <div className="pd u-s-m-b-30">
                                        <div className="pd-wrap">
                                            <div id="js-product-detail-modal">
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-1.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-2.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-3.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-4.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-5.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="u-s-m-t-15">
                                            <div id="js-product-detail-modal-thumbnail">
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-1.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-2.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-3.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-4.jpg"} alt="" />
                                                </div>
                                                <div>
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/product-d-5.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--====== End - Product Detail ======--> */}
                                </div>
                                <div className="col-lg-7">
                                    {/* <!--====== Product Right Side Details ======--> */}
                                    <div className="pd-detail">
                                        <div>
                                            <span className="pd-detail__name">Nikon Camera 4k Lens Zoom Pro</span>
                                        </div>
                                        <div>
                                            <div className="pd-detail__inline">
                                                <span className="pd-detail__price">$6.99</span>
                                                <span className="pd-detail__discount">(76% OFF)</span><del className="pd-detail__del">$28.97</del>
                                            </div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                                                <span className="pd-detail__review u-s-m-l-4">
                                                    <a href="product-detail.html">23 Reviews</a></span>
                                            </div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__inline">
                                                <span className="pd-detail__stock">200 in stock</span>
                                                <span className="pd-detail__left">Only 2 left</span>
                                            </div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <span className="pd-detail__preview-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__inline">
                                                <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6"></i>
                                                    <a href="signin.html">Add to Wishlist</a>
                                                    <span className="pd-detail__click-count">(222)</span></span>
                                            </div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__inline">
                                                <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6"></i>
                                                    <a href="signin.html">Email me When the price drops</a>
                                                    <span className="pd-detail__click-count">(20)</span></span>
                                            </div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <ul className="pd-social-list">
                                                <li>
                                                    <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a className="s-wa--color-hover" href="#"><i className="fab fa-whatsapp"></i></a>
                                                </li>
                                                <li>
                                                    <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <form className="pd-detail__form">
                                                <div className="pd-detail-inline-2">
                                                    <div className="u-s-m-b-15">
                                                        {/* <!--====== Input Counter ======--> */}
                                                        <div className="input-counter">
                                                            <span className="input-counter__minus fas fa-minus"></span>
                                                            <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue="1" data-min="1" data-max="1000" />
                                                            <span className="input-counter__plus fas fa-plus"></span>
                                                        </div>
                                                        {/* <!--====== End - Input Counter ======--> */}
                                                    </div>
                                                    <div className="u-s-m-b-15">
                                                        <button className="btn btn--e-brand-b-2" type="submit">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                                            <ul className="pd-detail__policy-list">
                                                <li><i className="fas fa-check-circle u-s-m-r-8"></i>
                                                    <span>Buyer Protection.</span>
                                                </li>
                                                <li><i className="fas fa-check-circle u-s-m-r-8"></i>
                                                    <span>Full Refund if you don't receive your order.</span>
                                                </li>
                                                <li><i className="fas fa-check-circle u-s-m-r-8"></i>
                                                    <span>Returns accepted if product not as described.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--====== End - Product Right Side Details ======--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ProductQuickView
