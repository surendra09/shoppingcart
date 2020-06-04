import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-singup/sign-in-and-signup.component";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Contact from "./pages/contact/contact.component";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(App);
