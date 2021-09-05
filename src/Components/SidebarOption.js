import React from "react";
import "./style/sidebarOption.css";

function SidebarOption({ title, Icon, onClick }) {
	return (
		<div onClick={onClick} className="sidebarOption">
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</div>
	);
}

export default SidebarOption;
