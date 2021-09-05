import React, { useEffect } from "react";
import "./style/songDetails.css";
import { useDataLayerValue } from "../Resources/DataLayer";
//components
import Header from "./Header";
import SongRow from "./SongRow";
import Footer from "./Footer";
//icons
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useParams } from "react-router-dom";

function SongDetails({ spotify }) {
	const [{ new_albums }, dispatch] = useDataLayerValue();
	const [{ selected_album }] = useDataLayerValue();
	const { id } = useParams();

	useEffect(() => {
		const response = fetch({ new_albums });
		response.then(
			new_albums?.albums.forEach((item) => {
				if (item.id === id) {
					dispatch({ type: "SET_SELECTED_ALBUM", selected_album: item });
				}
			})
		);
	}, [dispatch, id, new_albums]);

	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img
					src={
						selected_album &&
						selected_album.images &&
						selected_album.images[1] &&
						selected_album.images[1].url
					}
					alt=""
				/>

				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{selected_album?.name}</h2>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" className="body__shuffleSmall" />
					<MoreHorizIcon className="body__shuffleSmall" />
				</div>

				{selected_album?.tracks &&
					selected_album?.tracks.items.map((item) => (
						<SongRow
							onClick={() =>
								dispatch({ type: "SET_CURRENT_SONG", current_song: item })
							}
							imageUrl={selected_album.images[1].url}
							trackName={item.name}
							trackArtistName={item.artists
								.map((artist) => artist.name)
								.join(", ")}
							key={item.id}
						/>
					))}

				<Footer />
			</div>
		</div>
	);
}

export default SongDetails;
