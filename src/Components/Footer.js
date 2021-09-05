import React from "react";
import "./style/footer.css";
import { useDataLayerValue } from "../Resources/DataLayer";
import defAlbum from "../images/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg";
// Icons
import { IoRepeatOutline, IoShuffleOutline } from "react-icons/io5";
import { Grid, Slider } from "@material-ui/core";
import { FiVolume2 } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import {
	MdSkipPrevious,
	MdSkipNext,
	MdQueueMusic,
	MdDevices,
} from "react-icons/md";

function Footer() {
	const [{ current_song }] = useDataLayerValue();
	const [{ selected_album }] = useDataLayerValue();

	return (
		<div className="footer">
			{selected_album ? (
				<div className="footer__left">
					<img
						className="footer__albumLogo"
						src={
							selected_album &&
							selected_album.images &&
							selected_album.images[2].url
						}
						alt=""
					/>

					<div className="footer__songInfo">
						<h4>{current_song && current_song.name}</h4>
						<p>
							{current_song &&
								current_song.artists &&
								current_song.artists[0] &&
								current_song.artists[0].name}
						</p>
					</div>
				</div>
			) : (
				<div className="footer__left">
					<img className="footer__albumLogo" src={defAlbum} alt="" />

					<div className="footer__songInfo">
						<h4>Pain</h4>
						<p>Ryan Jones</p>
					</div>
				</div>
			)}
			<div className="footer__center">
				<IoShuffleOutline className="footer__green" />
				<MdSkipPrevious className="footer__icon" />
				<FaPlayCircle fontSize="large" className="footer__icons" />
				<MdSkipNext className="footer__icon" />
				<IoRepeatOutline className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<MdQueueMusic />
					</Grid>
					<Grid item>
						<MdDevices />
					</Grid>
					<Grid item>
						<FiVolume2 />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
