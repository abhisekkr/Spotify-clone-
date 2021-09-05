import React from "react";
import "./style/songRow.css";

function SongRow({ imageUrl, trackName, trackArtistName, onClick }) {
	return (
		<div onClick={onClick} className="songRow">
			<img className="songRow__album" src={imageUrl} alt="" />
			<div className="songRow__info">
				<h1>{trackName}</h1>
				<p>{trackArtistName}</p>
			</div>
		</div>
	);
}

export default SongRow;
