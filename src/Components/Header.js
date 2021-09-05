import React from "react";
import "./style/header.css";
import { useDataLayerValue } from "../Resources/DataLayer";
import { useHistory } from "react-router-dom";
//Icons
import { BsSearch } from "react-icons/bs";
import { Avatar } from "@material-ui/core";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
	const [{ user }] = useDataLayerValue();
	const history = useHistory();

	return (
		<div className="header">
			<div className="header__left">
				<div className="buttons">
					<IoIosArrowBack className="icons" onClick={() => history.push("/")} />
					<IoIosArrowForward className="icons" />
					<BsSearch className="icon" onClick={() => history.push("/search")} />
				</div>
			</div>
			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
