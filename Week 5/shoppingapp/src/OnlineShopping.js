import React, { Component } from "react";
import Cart from "./Cart";

class OnlineShopping extends Component {

    constructor(props) {

        super(props);

        this.items = [

            { itemname: "Laptop", price: 65000 },
            { itemname: "Wireless Mouse", price: 1200 },
            { itemname: "Keyboard", price: 1800 },
            { itemname: "Headphones", price: 2500 },
            { itemname: "Smart Watch", price: 5500 }

        ];

    }

    render() {

        return (

            <div>

                <h2>Online Shopping Cart</h2>

                <table border="1" cellPadding="10">

                    <thead>

                        <tr>

                            <th>Item Name</th>

                            <th>Price</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            this.items.map((item, index) => (

                                <Cart
                                    key={index}
                                    itemname={item.itemname}
                                    price={item.price}
                                />

                            ))
                        }

                    </tbody>

                </table>

            </div>

        );

    }

}

export default OnlineShopping;