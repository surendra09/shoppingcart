import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.componet";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./header.style.scss";

const Header = ({ hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			<Link className="option" to="/signin">
				SIGNIN
			</Link>
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ cart: { hidden } }) => ({
	hidden,
});

export default connect(mapStateToProps)(Header);
