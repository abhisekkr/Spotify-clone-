import React from "react";
import "./style/sidebar.css";
import { useDataLayerValue } from "../Resources/DataLayer";
import { useHistory } from "react-router-dom";
import SidebarOption from "./SidebarOption";
//Icons
import spotify from "../images/spotify2019-830x350.jpg";
import { FiHome } from "react-icons/fi";
import { VscLibrary, VscDiffAdded, VscHeart } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";

function Sidebar() {
	const [{ playlists }] = useDataLayerValue();
	const history = useHistory();

	return (
		<div className="sidebar">
			<img className="sidebar__logo" src={spotify} alt="" />
			<SidebarOption Icon={FiHome} title="Home" />
			<SidebarOption Icon={VscLibrary} title="Your Library" />
			<SidebarOption
				Icon={BsSearch}
				title="Search"
				onClick={() => history.push("/search")}
			/>
			<br />
			<SidebarOption Icon={VscDiffAdded} title="Create Playlist" />
			<SidebarOption Icon={VscHeart} title="Liked Songs" />

			<hr />
			{playlists?.items?.map((playlist) => (
				<div key={playlist.id}>
					<SidebarOption title={playlist.name} />
				</div>
			))}
		</div>
	);
}

export default Sidebar;
