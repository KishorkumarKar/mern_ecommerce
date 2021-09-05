import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            last_name:"",
            first_name:"",
        };
        this.handelOnChange = this.handelOnChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    customerAdd=data=>{
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        const login_axios = axios.create({
            withCredentials: true,
            headers: {
            Accept: "application/json",
            "Content-Type": "x-www-form-urlencoded"
            }
            });
        axios.post("/api/users/add",data,{headers: headers, withCredentials: true,})
        // login_axios.post("/api/users/add",data)
        // .then(res=>{
        //     console.log(res);
        // })
    }

    async  handelSubmit(event){
        //console.log(this.state);
        event.preventDefault();
        await this.customerAdd(this.state);
        console.log(this.state);
    }

    handelOnChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(target);
        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <div>
                {/* <div className="preloader is-active">
                    <div className="preloader__wrap">
                        <img className="preloader__img" src="images/preloader.png" alt="" />
                    </div>
                </div> */}
                {/* <!--====== Main App ======--> */}
                <div id="app">
                    {/* <!--====== Main Header ======--> */}
                    <Header />
                    {/* <!--====== End - Main Header ======--> */}
                    {/* <!--====== App Content ======--> */}
                    <div className="app-content">
                        {/* <!--====== Section 1 ======--> */}
                        <div className="u-s-p-y-60">
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="breadcrumb">
                                        <div className="breadcrumb__wrap">
                                            <ul className="breadcrumb__list">
                                                <li className="has-separator">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li className="is-marked">
                                                    <a href="signup.html">Signup</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--====== End - Section 1 ======--> */}
                        {/* <!--====== Section 2 ======--> */}
                        <div className="u-s-p-b-60">
                            {/* <!--====== Section Intro ======--> */}
                            <div className="section__intro u-s-m-b-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section__text-wrap">
                                                <h1 className="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Intro ======--> */}
                            {/* <!--====== Section Content ======--> */}
                            <div className="section__content">
                                <div className="container">
                                    <div className="row row--center">
                                        <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                            <div className="l-f-o">
                                                <div className="l-f-o__pad-box">
                                                    <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                                                    <form className="l-f-o__form" onSubmit={this.handelSubmit}>
                                                        <div className="gl-s-api">
                                                            <div className="u-s-m-b-15">
                                                                <button className="gl-s-api__btn gl-s-api__btn--fb" type="button"><i className="fab fa-facebook-f"></i>
                                                                    <span>Signup with Facebook</span></button>
                                                            </div>
                                                            <div className="u-s-m-b-30">
                                                                <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i className="fab fa-google"></i>
                                                                    <span>Signup with Google</span></button>
                                                            </div>
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>
                                                            <input className="input-text input-text--primary-style" 
                                                            type="text" 
                                                            onChange={this.handelOnChange}
                                                            name="first_name" 
                                                            placeholder="First Name" />
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                                                            <input className="input-text input-text--primary-style" 
                                                            type="text" 
                                                            onChange={this.handelOnChange}
                                                            name="last_name" 
                                                            placeholder="Last Name" />
                                                        </div>
                                                        {/* <div className="gl-inline">
                                                            <div className="u-s-m-b-30">
                                                                <span className="gl-label">BIRTHDAY</span>
                                                                <div className="gl-dob">
                                                                   <select
                                                                   name="birth_m"
                                                                   onChange={this.handelOnChange}
                                                                   value={this.state.birth_m}
                                                                   className="select-box select-box--primary-style">
                                                                        <option value="DEFAULT">Month</option>
                                                                        <option value="male">January</option>
                                                                        <option value="male">February</option>
                                                                        <option value="male">March</option>
                                                                        <option value="male">April</option>
                                                                    </select>
                                                                   <select
                                                                   onChange={this.handelOnChange}
                                                                   name="birth_d"
                                                                   value={this.state.birth_d}
                                                                   className="select-box select-box--primary-style">
                                                                        <option value="DEFAULT">Day</option>
                                                                        <option value="01">01</option>
                                                                        <option value="02">02</option>
                                                                        <option value="03">03</option>
                                                                        <option value="04">04</option>
                                                                    </select>
                                                                   <select
                                                                   onChange={this.handelOnChange}
                                                                   name="birth_y"
                                                                   value={this.state.birth_y}
                                                                   className="select-box select-box--primary-style">
                                                                        <option value="DEFAULT">Year</option>
                                                                        <option value="1991">1991</option>
                                                                        <option value="1992">1992</option>
                                                                        <option value="1993">1993</option>
                                                                        <option value="1994">1994</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="u-s-m-b-30">
                                                                <label className="gl-label" htmlFor="gender">GENDER</label>
                                                               <select
                                                               className="select-box select-box--primary-style u-w-100" 
                                                               onChange={this.handelOnChange}
                                                               value={this.state.gender}
                                                               name="gender">
                                                                    <option value="DEFAULT">Select</option>
                                                                    <option value="male">Male</option>
                                                                    <option value="male">Female</option>
                                                                </select>
                                                            </div>
                                                        </div> */}
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="reg-email">E-MAIL *</label>
                                                            <input className="input-text input-text--primary-style"
                                                             type="text" 
                                                             name="email" 
                                                             onChange={this.handelOnChange}
                                                             placeholder="Enter E-mail" />
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="reg-password">PASSWORD *</label>
                                                            <input className="input-text input-text--primary-style" 
                                                            type="text" 
                                                            name="password" 
                                                            onChange={this.handelOnChange}
                                                            placeholder="Enter Password" />
                                                        </div>
                                                        <div className="u-s-m-b-15">
                                                            <button className="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button>
                                                        </div>
                                                        <a className="gl-link" href="#">Return to Store</a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--====== End - Section Content ======--> */}
                        </div>
                        {/* <!--====== End - Section 2 ======--> */}
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

export default Signup
