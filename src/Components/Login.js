import React from "react";
import "./style/login.css";
import { loginUrl } from "../Resources/spotify";
import spotifyBig from "../images/logoBigSpotify.jpg";

function Login() {
	return (
		<div className="login">
			<img src={spotifyBig} alt="" />
			<a href={loginUrl}> LOGIN WITH SPOTIFY </a>
		</div>
	);
}

export default Login;
