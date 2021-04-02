import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import Deals from './HomePage/Deals'
import Trending from "./HomePage/Trending"
import DealsOfTheDay from "./HomePage/DealsOfTheDay"
import NewArrival from "./HomePage/NewArrival"
import FeatureProduct from "./HomePage/FeatureProduct"
import ProductQuickView from "./Product/ProductQuickView"

export class Homepage extends Component {
    render() {
        return (
            <div>
                {/* <div className="preloader is-active">
                    <div className="preloader__wrap">
                        <img className="preloader__img" src={process.env.PUBLIC_URL + "assets/images/preloader.png"} alt="" />
                    </div>
                </div> */}
                {/* <!--====== Main App ======--> */}
                <div id="app">
                    {/* <!--====== Main Header ======--> */}
                    <Header />
                    {/* <!--====== End - Main Header ======--> */}
                    {/* <!--====== App Content ======--> */}
                    <div className="app-content">
                        {/* <!--====== Primary Slider ======--> */}
                        <Slider />
                        {/* <!--====== End - Primary Slider ======--> */}
                        {/* <!--====== Section 1 ======--> */}
                        <Deals />
                        {/* <!--====== End - Section 1 ======--> */}
                        {/* <!--====== Section 2 ======--> */}
                        <Trending />
                        {/* <!--====== End - Section 2 ======--> */}
                        {/* <!--====== Section 3 ======--> */}
                        <DealsOfTheDay />
                        {/* <!--====== End - Section 3 ======--> */}
                        {/* <!--====== Section 4 ======--> */}
                        <NewArrival />
                        {/* <!--====== End - Section 4 ======--> */}
                        {/* <!--====== Section 5 ======--> */}
                        <div className="banner-bg">
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="banner-bg__countdown">
                                                <div className="countdown countdown--style-banner" data-countdown="2020/05/01"></div>
                                            </div>
                                            <div className="banner-bg__wrap">
                                                <div className="banner-bg__text-1">
                                                    <span className="u-c-white">Global</span>
                                                    <span className="u-c-secondary">Offers</span>
                                                </div>
                                                <div className="banner-bg__text-2">
                                                    <span className="u-c-secondary">Official Launch</span>
                                                    <span className="u-c-white">Don't Miss!</span>
                                                </div>
                                                <span className="banner-bg__text-block banner-bg__text-3 u-c-secondary">Enjoy Free Shipping when you buy 2 items and above!</span>
                                                <a className="banner-bg__shop-now btn--e-secondary" href="shop-side-version-2.html">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 5 ======--> */}
                        {/* <!--====== Section 6 ======--> */}
                        <FeatureProduct />
                        {/* <!--====== End - Section 6 ======--> */}
                        {/* <!--====== Section 7 ======--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                            <a className="promotion" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">
                                                    <img className="aspect__img promotion__img" src={process.env.PUBLIC_URL + "assets/images/promo/promo-img-1.jpg"} alt="" />
                                                </div>
                                                <div className="promotion__content">
                                                    <div className="promotion__text-wrap">
                                                        <div className="promotion__text-1">
                                                            <span className="u-c-secondary">ACCESSORIES FOR YOUR EVERYDAY</span>
                                                        </div>
                                                        <div className="promotion__text-2">
                                                            <span className="u-c-secondary">GET IN</span>
                                                            <span className="u-c-brand">TOUCH</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                            <a className="promotion" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">
                                                    <img className="aspect__img promotion__img" src={process.env.PUBLIC_URL + "assets/images/promo/promo-img-2.jpg"} alt="" />
                                                </div>
                                                <div className="promotion__content">
                                                    <div className="promotion__text-wrap">
                                                        <div className="promotion__text-1">
                                                            <span className="u-c-secondary">SMARTPHONE</span>
                                                            <span className="u-c-brand">2019</span>
                                                        </div>
                                                        <div className="promotion__text-2">
                                                            <span className="u-c-secondary">NEW ARRIVALS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                            <a className="promotion" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">
                                                    <img className="aspect__img promotion__img" src={process.env.PUBLIC_URL + "assets/images/promo/promo-img-3.jpg"} alt="" />
                                                </div>
                                                <div className="promotion__content">
                                                    <div className="promotion__text-wrap">
                                                        <div className="promotion__text-1">
                                                            <span className="u-c-secondary">DSLR FOR NEW GENERATION</span>
                                                        </div>
                                                        <div className="promotion__text-2">
                                                            <span className="u-c-brand">GET UP TO 10% OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 7 ======--> */}
                        {/* <!--====== Section 8 ======--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                            <div className="column-product">
                                                <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
                                                <ul className="column-product__list">
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product23.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 15 Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product24.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 13 Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product25.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
                                                                <span className="product-l__price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                            <div className="column-product">
                                                <span className="column-product__title u-c-secondary u-s-m-b-25">WEEKLY PRODUCTS</span>
                                                <ul className="column-product__list">
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product26.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 10 Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00
                                                        <span className="product-l__discount">$160</span></span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product27.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
                                                                <span className="product-l__price">$125.00
                                                        <span className="product-l__discount">$160</span></span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product28.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 15 Ultra Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00
                                                        <span className="product-l__discount">$160</span></span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                            <div className="column-product">
                                                <span className="column-product__title u-c-secondary u-s-m-b-25">FLASH PRODUCTS</span>
                                                <ul className="column-product__list">
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product29.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 20 Ultra Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product30.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 11 Ultra Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="column-product__item">
                                                        <div className="product-l">
                                                            <div className="product-l__img-wrap">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                                    <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product31.jpg"} alt="" /></a>
                                                            </div>
                                                            <div className="product-l__info-wrap">
                                                                <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                                                                <span className="product-l__category">
                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <span className="product-l__name">
                                                                    <a href="product-detail.html">Razor Gear 10 Ultra Ram 16GB</a></span>
                                                                <span className="product-l__price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 8 ======--> */}
                        {/* <!--====== Section 9 ======--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="service u-h-100">
                                                <div className="service__icon"><i className="fas fa-truck"></i></div>
                                                <div className="service__info-wrap">
                                                    <span className="service__info-text-1">Free Shipping</span>
                                                    <span className="service__info-text-2">Free shipping on all US order or order above $200</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="service u-h-100">
                                                <div className="service__icon"><i className="fas fa-redo"></i></div>
                                                <div className="service__info-wrap">
                                                    <span className="service__info-text-1">Shop with Confidence</span>
                                                    <span className="service__info-text-2">Our Protection covers your purchase from click to delivery</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="service u-h-100">
                                                <div className="service__icon"><i className="fas fa-headphones-alt"></i></div>
                                                <div className="service__info-wrap">
                                                    <span className="service__info-text-1">24/7 Help Center</span>
                                                    <span className="service__info-text-2">Round-the-clock assistance for a smooth shopping experience</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 9 ======--> */}
                        {/* <!--====== Section 10 ======--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Intro ======--> */}
                            <div className="section__intro u-s-m-b-46">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section__text-wrap">
                                                <h1 className="section__heading u-c-secondary u-s-m-b-12">LATEST FROM BLOG</h1>
                                                <span className="section__span u-c-silver">START YOU DAY WITH FRESH AND LATEST NEWS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Intro ======--> */}
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="bp-mini bp-mini--img u-h-100">
                                                <div className="bp-mini__thumbnail">
                                                    {/* <!--====== Image Code ======--> */}
                                                    <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                                                        <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/blog/post-2.jpg"} alt="" /></a>
                                                    {/* <!--====== End - Image Code ======--> */}
                                                </div>
                                                <div className="bp-mini__content">
                                                    <div className="bp-mini__stat">
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__publish-date">
                                                                <a>
                                                                    <span>25 February 2018</span></a></span></span>
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__preposition">By</span>
                                                            <span className="bp-mini__author">
                                                                <a href="#">Dayle</a></span></span>
                                                        <span className="bp-mini__stat">
                                                            <span className="bp-mini__comment">
                                                                <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>
                                                                    <span>8</span></a></span></span>
                                                    </div>
                                                    <div className="bp-mini__category">
                                                        <a>Learning</a>
                                                        <a>News</a>
                                                        <a>Health</a>
                                                    </div>
                                                    <span className="bp-mini__h1">
                                                        <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>
                                                    <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className="blog-t-w">
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="bp-mini bp-mini--img u-h-100">
                                                <div className="bp-mini__thumbnail">
                                                    {/* <!--====== Image Code ======--> */}
                                                    <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                                                        <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/blog/post-12.jpg"} alt="" /></a>
                                                    {/* <!--====== End - Image Code ======--> */}
                                                </div>
                                                <div className="bp-mini__content">
                                                    <div className="bp-mini__stat">
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__publish-date">
                                                                <a>
                                                                    <span>25 February 2018</span></a></span></span>
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__preposition">By</span>
                                                            <span className="bp-mini__author">
                                                                <a href="#">Dayle</a></span></span>
                                                        <span className="bp-mini__stat">
                                                            <span className="bp-mini__comment">
                                                                <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>
                                                                    <span>8</span></a></span></span>
                                                    </div>
                                                    <div className="bp-mini__category">
                                                        <a>Learning</a>
                                                        <a>News</a>
                                                        <a>Health</a>
                                                    </div>
                                                    <span className="bp-mini__h1">
                                                        <a href="blog-detail.html">Wait till its open</a></span>
                                                    <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className="blog-t-w">
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="bp-mini bp-mini--img u-h-100">
                                                <div className="bp-mini__thumbnail">
                                                    {/* <!--====== Image Code ======--> */}
                                                    <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                                                        <img className="aspect__img" src={process.env.PUBLIC_URL + "assets/images/blog/post-5.jpg"} alt="" /></a>
                                                    {/* <!--====== End - Image Code ======--> */}
                                                </div>
                                                <div className="bp-mini__content">
                                                    <div className="bp-mini__stat">
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__publish-date">
                                                                <a>
                                                                    <span>25 February 2018</span></a></span></span>
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__preposition">By</span>
                                                            <span className="bp-mini__author">
                                                                <a href="#">Dayle</a></span></span>
                                                        <span className="bp-mini__stat">
                                                            <span className="bp-mini__comment">
                                                                <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>
                                                                    <span>8</span></a></span></span>
                                                    </div>
                                                    <div className="bp-mini__category">
                                                        <a>Learning</a>
                                                        <a>News</a>
                                                        <a>Health</a>
                                                    </div>
                                                    <span className="bp-mini__h1">
                                                        <a href="blog-detail.html">Tell me difference between smoke and vape</a></span>
                                                    <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className="blog-t-w">
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 10 ======--> */}
                        {/* <!--====== Section 11 ======--> */}
                        <div className="u-s-p-b-90 u-s-m-b-30">
                            {/* <!--====== Section Intro ======--> */}
                            <div className="section__intro u-s-m-b-46">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section__text-wrap">
                                                <h1 className="section__heading u-c-secondary u-s-m-b-12">CLIENTS FEEDBACK</h1>
                                                <span className="section__span u-c-silver">WHAT OUR CLIENTS SAY</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Intro ======--> */}
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    {/* <!--====== Testimonial Slider ======--> */}
                                    <div className="slider-fouc">
                                        <div className="owl-carousel" id="testimonial-slider">
                                            <div className="testimonial">
                                                <div className="testimonial__img-wrap">
                                                    <img className="testimonial__img" src={process.env.PUBLIC_URL + "assets/images/about/test-1.jpg"} alt="" />
                                                </div>
                                                <div className="testimonial__content-wrap">
                                                    <span className="testimonial__double-quote"><i className="fas fa-quote-right"></i></span>
                                                    <blockquote className="testimonial__block-quote">
                                                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                                    </blockquote>
                                                    <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                                </div>
                                            </div>
                                            <div className="testimonial">
                                                <div className="testimonial__img-wrap">
                                                    <img className="testimonial__img" src={process.env.PUBLIC_URL + "assets/images/about/test-2.jpg"} alt="" />
                                                </div>
                                                <div className="testimonial__content-wrap">
                                                    <span className="testimonial__double-quote"><i className="fas fa-quote-right"></i></span>
                                                    <blockquote className="testimonial__block-quote">
                                                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                                    </blockquote>
                                                    <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                                </div>
                                            </div>
                                            <div className="testimonial">
                                                <div className="testimonial__img-wrap">
                                                    <img className="testimonial__img" src={process.env.PUBLIC_URL + "assets/images/about/test-3.jpg"} alt="" />
                                                </div>
                                                <div className="testimonial__content-wrap">
                                                    <span className="testimonial__double-quote"><i className="fas fa-quote-right"></i></span>
                                                    <blockquote className="testimonial__block-quote">
                                                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                                    </blockquote>
                                                    <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                                </div>
                                            </div>
                                            <div className="testimonial">
                                                <div className="testimonial__img-wrap">
                                                    <img className="testimonial__img" src={process.env.PUBLIC_URL + "assets/images/about/test-4.jpg"} alt="" />
                                                </div>
                                                <div className="testimonial__content-wrap">
                                                    <span className="testimonial__double-quote"><i className="fas fa-quote-right"></i></span>
                                                    <blockquote className="testimonial__block-quote">
                                                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                                    </blockquote>
                                                    <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--====== End - Testimonial Slider ======--> */}
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 11 ======--> */}
                        {/* <!--====== Section 12 ======--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    {/* <!--====== Brand Slider ======--> */}
                                    <div className="slider-fouc">
                                        <div className="owl-carousel" id="brand-slider" data-item="5">
                                            <div className="brand-slide">
                                                <a href="shop-side-version-2.html">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/brand/b1.png"} alt="" /></a>
                                            </div>
                                            <div className="brand-slide">
                                                <a href="shop-side-version-2.html">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/brand/b2.png"} alt="" /></a>
                                            </div>
                                            <div className="brand-slide">
                                                <a href="shop-side-version-2.html">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/brand/b3.png"} alt="" /></a>
                                            </div>
                                            <div className="brand-slide">
                                                <a href="shop-side-version-2.html">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/brand/b4.png"} alt="" /></a>
                                            </div>
                                            <div className="brand-slide">
                                                <a href="shop-side-version-2.html">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/brand/b5.png"} alt="" /></a>
                                            </div>
                                            <div className="brand-slide">
                                                <a href="shop-side-version-2.html">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/brand/b6.png"} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--====== End - Brand Slider ======--> */}
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 12 ======--> */}
                    </div>
                    {/* <!--====== End - App Content ======--> */}
                    {/* <!--====== Main Footer ======--> */}
                    <Footer />
                    {/* <!--====== Modal Section ======--> */}
                    {/* <!--====== Quick Look Modal ======--> */}
                    <ProductQuickView />
                    {/* <!--====== End - Quick Look Modal ======--> */}
                    {/* <!--====== Add to Cart Modal ======--> */}
                    <div className="modal fade" id="add-to-cart">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content modal-radius modal-shadow">
                                <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal"></button>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="success u-s-m-b-30">
                                                <div className="success__text-wrap"><i className="fas fa-check"></i>
                                                    <span>Item is added successfully!</span>
                                                </div>
                                                <div className="success__img-wrap">
                                                    <img className="u-img-fluid" src={process.env.PUBLIC_URL + "assets/images/product/electronic/product1.jpg"} alt="" />
                                                </div>
                                                <div className="success__info-wrap">
                                                    <span className="success__name">Beats Bomb Wireless Headphone</span>
                                                    <span className="success__quantity">Quantity: 1</span>
                                                    <span className="success__price">$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="s-option">
                                                <span className="s-option__text">1 item (s) in your cart</span>
                                                <div className="s-option__link-box">
                                                    <a className="s-option__link btn--e-white-brand-shadow" data-dismiss="modal">CONTINUE SHOPPING</a>
                                                    <a className="s-option__link btn--e-white-brand-shadow" href="cart.html">VIEW CART</a>
                                                    <a className="s-option__link btn--e-brand-shadow" href="checkout.html">PROCEED TO CHECKOUT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--====== End - Add to Cart Modal ======--> */}
                    {/* <!--====== Newsletter Subscribe Modal ======--> */}
                    <div className="modal fade new-l" id="newsletter-modal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content modal--shadow">
                                <button className="btn new-l__dismiss fas fa-times" type="button" data-dismiss="modal"></button>
                                <div className="modal-body">
                                    <div className="row u-s-m-x-0">
                                        <div className="col-lg-6 new-l__col-1 u-s-p-x-0">
                                            <a className="new-l__img-wrap u-d-block" href="shop-side-version-2.html">
                                                <img className="u-img-fluid u-d-block" src={process.env.PUBLIC_URL + "assets/images/newsletter/newsletter.jpg"} alt="" /></a>
                                        </div>
                                        <div className="col-lg-6 new-l__col-2">
                                            <div className="new-l__section u-s-m-t-30">
                                                <div className="u-s-m-b-8 new-l--center">
                                                    <h3 className="new-l__h3">Newsletter</h3>
                                                </div>
                                                <div className="u-s-m-b-30 new-l--center">
                                                    <p className="new-l__p1">Sign up for emails to get the scoop on new arrivals, special sales and more.</p>
                                                </div>
                                                <form className="new-l__form">
                                                    <div className="u-s-m-b-15">
                                                        <input className="news-l__input" type="text" placeholder="E-mail Address" />
                                                    </div>
                                                    <div className="u-s-m-b-15">
                                                        <button className="btn btn--e-brand-b-2" type="submit">Sign up!</button>
                                                    </div>
                                                </form>
                                                <div className="u-s-m-b-15 new-l--center">
                                                    <p className="new-l__p2">By Signing up, you agree to receive Reshop offers,<br />promotions and other commercial messages. You may unsubscribe at any time.</p>
                                                </div>
                                                <div className="u-s-m-b-15 new-l--center">
                                                    <a className="new-l__link" data-dismiss="modal">No Thanks</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--====== End - Newsletter Subscribe Modal ======--> */}
                    {/* <!--====== End - Modal Section ======--> */}
                </div>
                {/* <!--====== End - Main App ======--> */}
            </div>
        )
    }
}

export default Homepage
