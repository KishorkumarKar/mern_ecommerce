import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

export class AccountLink extends Component {
  render() {
    if (window.location.pathname === this.props.to) {
      return (
        <Link to={this.props.to} onClick={(event) => event.preventDefault()}>
          <i className="fas fa-user-circle u-s-m-r-6"></i>
          <span>{this.props.linkText}</span>
        </Link>
      );
    }
    return (
      <Link to={this.props.to}>
        <i className="fas fa-user-circle u-s-m-r-6"></i>
        <span>{this.props.linkText}</span>
      </Link>
    );
  }
}

export default AccountLink;
