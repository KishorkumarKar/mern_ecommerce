import React, { Component } from 'react'

export class RecentOrder extends Component {
    render() {
        return (
            <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius">
                <h2 className="dash__h2 u-s-p-xy-20">RECENT ORDERS</h2>
                <div className="dash__table-wrap gl-scroll">
                    <table className="dash__table">
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Placed On</th>
                                <th>Items</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3054231326</td>
                                <td>26/13/2016</td>
                                <td>
                                    <div className="dash__table-img-wrap">
                                        <img src={process.env.PUBLIC_URL + "assets/images/product/electronic/product3.jpg"}
                                            className="u-img-fluid" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="dash__table-total">
                                        <span>$126.00</span>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3054231326</td>
                                <td>26/13/2016</td>
                                <td>
                                    <div className="dash__table-img-wrap">
                                        <img src={process.env.PUBLIC_URL + "assets/images/product/electronic/product14.jpg"}
                                            className="u-img-fluid" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="dash__table-total">
                                        <span>$126.00</span>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3054231326</td>
                                <td>26/13/2016</td>
                                <td>
                                    <div className="dash__table-img-wrap">
                                        <img src={process.env.PUBLIC_URL + "assets/images/product/men/product8.jpg"}
                                            className="u-img-fluid" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="dash__table-total">
                                        <span>$126.00</span>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3054231326</td>
                                <td>26/13/2016</td>
                                <td>
                                    <div className="dash__table-img-wrap">
                                        <img src={process.env.PUBLIC_URL + "assets/images/product/women/product10.jpg"}
                                            className="u-img-fluid" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="dash__table-total">
                                        <span>$126.00</span>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default RecentOrder
