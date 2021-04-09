import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import LeftBar from "./Account/LeftBar";
import RecentOrder from "./Account/RecentOrder";
import { Link } from 'react-router-dom'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            customer:localStorage.getItem("appCustomer") ? JSON.parse(localStorage.getItem("appCustomer")) : {}
        }
     }

     componentWillMount() {
         console.log(this.state);
         console.log(1111);

         /* this.setState({
            adsdasd:"value...."
        }); */
        //console.log(this.state.adsdasd);
     }

     onClick = (e) => {
        e.preventDefault();
      }
    render() {
        return (
            <div>
                {/* <!--====== Main App ======--> */}
                <div id="app">
                    {/* <!--====== Main Header ======--> */}
                    <Header />
                    {/* <!--====== End - Main Header ======--> */}
                    {/* <!--====== App Content ======--> */}
                    <div className="app-content">
                        {/* <!--====== Section 1 =====--> */}
                        <div className="u-s-p-y-60">
                            {/* <!--====== Section Content =====--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="breadcrumb">
                                        <div className="breadcrumb__wrap">
                                            <ul className="breadcrumb__list">
                                                <li className="has-separator">
                                                    <Link to={"/"}>Home</Link>                                                    
                                                </li>
                                                <li className="is-marked">
                                                    <a  onClick={this.onClick}>My Account</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--====== End - Section 1 =====--> */}
                        {/* <!--====== Section 2 =====--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Content =====--> */}
                            <div className="section__content">
                                <div className="dash">
                                    <div className="container">
                                        <div className="row">
                                            {/* <!--====== Dashboard Features =====--> */}
                                            <LeftBar/>
                                            {/* <!--====== End - Dashboard Features =====--> */}                                            
                                            <div className="col-lg-9 col-md-12">
                                                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                                    <div className="dash__pad-2">
                                                        <h1 className="dash__h1 u-s-m-b-14">Manage My Account</h1>
                                                        <span className="dash__text u-s-m-b-30">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</span>
                                                        <div className="row">
                                                            <div className="col-lg-4 u-s-m-b-30">
                                                                <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                                                    <div className="dash__pad-3">
                                                                        <h2 className="dash__h2 u-s-m-b-8">PERSONAL PROFILE</h2>
                                                                        <div className="dash__link dash__link--secondary u-s-m-b-8">
                                                                            <a href="dash-edit-profile.html">Edit</a>
                                                                        </div>
                                                                        <span className="dash__text">{this.state.customer.first_name} {this.state.customer.last_name}</span>
                                                                        <span className="dash__text">{this.state.customer.email}</span>
                                                                        <div className="dash__link dash__link--secondary u-s-m-t-8">
                                                                            <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 u-s-m-b-30">
                                                                <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                                                    <div className="dash__pad-3">
                                                                        <h2 className="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>
                                                                        <span className="dash__text-2 u-s-m-b-8">Default Shipping Address</span>
                                                                        <div className="dash__link dash__link--secondary u-s-m-b-8">
                                                                            <a href="dash-address-book.html">Edit</a>
                                                                        </div>
                                                                        <span className="dash__text">4247 Ashford Drive Virginia - VA-20006 - USA</span>
                                                                        <span className="dash__text">(+0) 900901904</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 u-s-m-b-30">
                                                                <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                                                    <div className="dash__pad-3">
                                                                        <h2 className="dash__h2 u-s-m-b-8">BILLING ADDRESS</h2>
                                                                        <span className="dash__text-2 u-s-m-b-8">Default Billing Address</span>
                                                                        <span className="dash__text">4247 Ashford Drive Virginia - VA-20006 - USA</span>
                                                                        <span className="dash__text">(+0) 900901904</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                                <RecentOrder/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content =====--> */}
                        </div>
                        {/* <!--====== End - Section 2 =====--> */}
                    </div>
                    {/* <!--====== End - App Content ======--> */}
                    {/* <!--====== Main Footer ======--> */}
                    <Footer />
                </div>
                {/* <!--====== End - Main App ======--> */}
            </div>
        )
    }
}

export default Dashboard
