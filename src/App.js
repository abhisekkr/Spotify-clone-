import React, { useEffect } from "react";
import { useDataLayerValue } from "./Resources/DataLayer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//spotify
import { getTokenFromUrl } from "./Resources/spotify";
import SpotifyWebApi from "spotify-web-api-js";
//components
import Login from "./Components/Login";
import Home from "./Components/Home";
import SongDetails from "./Components/SongDetails";
import Search from "./Components/Search";

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});

			spotify.getPlaylist("37i9dQZF1DX1dCsSMSXSsP").then((response) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				});
			});

			spotify
				.getAlbums([
					"5U4W9E5WsYb2jUQWePT8Xm",
					"3KyVcddATClQKIdtaap4bV",
					"41MnTivkwTO3UUJ8DrqEJJ",
					"6JWc4iAiJ9FjyK0B59ABb4",
					"6UXCm6bOO4gFlDQZV5yL37",
				])
				.then((response) => {
					dispatch({
						type: "GET_ALBUMS",
						sample_albums: response,
					});
				});

			spotify.getArtistAlbums("7qG3b048QCHVRO5Pv1T5lw").then((response) => {
				dispatch({
					type: "GET_ARTIST_ALBUMS",
					artist_albums: response,
				});
			});

			spotify
				.getAlbums([
					"2kjyPzcMPYUZlB9CJzu10f",
					"4JAvwK4APPArjIsOdGoJXX",
					"3rMjL8NA5Wh2hbMNk2fSlY",
					"2upw5IrzeqKApIQZyx5o6r",
					"7MFj8Fxl8OrEAOyOBSMz51",
					"5tArdU5M7zWxHPHVL4B7Wv",
					"0c7bLm2cqhAWQ4BhovOUdm",
					"682pJqnx8hcrCfSjvyNBki",
					"43kI3W0iizaUyE9PrzGq1j",
					"654KFpNOZ26Hj9luu7aKeM",
					"06RhAj4FSp8YlDyrxulgbt",
					"5KLKj0easvhHlP39QUXovl",
					"0mdin8KI5Npfa7RBGsIOwm",
					"5AOdiY7XlBfcv7sfexeEjc",
					"01U0pmE3UZfB9mSwUkE0m9",
					"1MsQJu4l3DyUkvUcsojE6v",
					"4hKWAWw7dOBJvPiwghGWC5",
					"4iwP3pc1MGgEVtPygt5KZL",
					"0Q3LLJusmYOQcmZV93gfyt",
					"7sAAPOgQ1UNo0iozBiqNQX",
				])
				.then((response) => {
					dispatch({
						type: "GET_NEW_RELEASES",
						new_albums: response,
					});
				});
		}
	}, [dispatch]);

	return (
		<div className="App">
			<Router>
				{!token ? (
					<Login />
				) : (
					<Switch>
						<Route exact path="/">
							<Home spotify={spotify} />
						</Route>
						<Route path="/SongDetails/:id">
							<SongDetails />
						</Route>
						<Route path="/search">
							<Search />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
