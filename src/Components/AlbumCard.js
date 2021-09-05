import React from "react";
import "./style/albumCard.css";
//Icons
import { BiPlay } from "react-icons/bi";

function AlbumCard({ image, songName, singer }) {
	return (
		<div className="card">
			<div className="cover">
				<img src={image} alt="" className="watermark" />
				<div className="pb-wrapper">
					<BiPlay className="play-button" />
				</div>
			</div>
			<div className="description">
				<h1 className="pl-name">{songName}</h1>
				<p className="pl-about">{singer}</p>
			</div>
		</div>
	);
}

export default AlbumCard;
