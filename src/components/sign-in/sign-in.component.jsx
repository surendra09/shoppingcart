import React, { Children } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compent";

import "./sign-in.style.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.state = { email: "", password: "" };
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I Already have Account</h2>
				<span> Sign in with your email and password</span>

				<from onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>

					<CustomButton type="submit">SIGN IN </CustomButton>
				</from>
			</div>
		);
	}
}

export default SignIn;
