import React from "react";

import CustomButton from "../custom-button/custom-button.compent";
import "./cart-dropdown.style.scss";

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items"></div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
