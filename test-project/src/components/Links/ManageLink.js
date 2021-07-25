import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
export class ManageLink extends Component {
  render() {
    if (window.location.pathname === this.props.to) {
      return (
        <Link to={this.props.to} onClick={(event) => event.preventDefault()}>
          <i className="fas fa-lock u-s-m-r-6"></i>
          {this.props.linktext}
        </Link>
      );
    }
    return (
      <Link to={this.props.to}>
        <i className="fas fa-lock u-s-m-r-6"></i>
        {this.props.linktext}
      </Link>
    );
  }
}

export default ManageLink;
