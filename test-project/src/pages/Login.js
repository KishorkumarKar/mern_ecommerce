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
        };
        this.handelOnChange = this.handelOnChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    customerLogin=data=>{
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        axios.post("/api/users/login",data,
        {
            headers: headers,
            withCredentials: true,
            credentials: "same-origin"
        })
        .then(res=>{
            if(res.status===200){
                localStorage.setItem('appCustomer', JSON.stringify(res.data));
                this.props.history.push("/dashboard");
            }
        })
        .catch(response=>{
            console.log(response);

        })
    }

    async  handelSubmit(event){
        event.preventDefault();
        await this.customerLogin(this.state);
        console.log(this.state);
    }

    handelOnChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        });
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
                                                    <a href="signup.html">Login</a>
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
                                                <h1 className="section__heading u-c-secondary">LOGIN</h1>
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
                                                            <button className="btn btn--e-transparent-brand-b-2" type="submit">Login</button>
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
