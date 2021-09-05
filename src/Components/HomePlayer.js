import React from "react";
import "./style/homePlayer.css";
import { useDataLayerValue } from "../Resources/DataLayer";
import { Link } from "react-router-dom";
//components
import Header from "./Header";
import AlbumCard from "./AlbumCard";

function HomePlayer({ spotify }) {
	const [{ new_albums }] = useDataLayerValue();
	const [{ sample_albums }] = useDataLayerValue();

	return (
		<div className="home__player">
			<Header spotify={spotify} />
			<h2>New Releases</h2>
			<div className="homeCard">
				{new_albums?.albums.map((item) => (
					<div key={item.id}>
						<Link to={`/SongDetails/${item.id}`}>
							<AlbumCard
								image={item.images[1].url}
								songName={item.name}
								singer={item.artists[0].name}
							/>
						</Link>
					</div>
				))}
			</div>

			<h2>English Albums</h2>
			<div className="homeCard">
				{sample_albums?.albums.map((item) => (
					<div key={item.id}>
						<AlbumCard
							image={item.images[1].url}
							songName={item.name}
							singer={item.artists[0].name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomePlayer;
