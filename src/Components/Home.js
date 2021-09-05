import React from "react";
import "./style/home.css";
//Components
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import HomePlayer from "./HomePlayer";

function Home({ spotify }) {
	return (
		<div className="home">
			<div className="home__body">
				<Sidebar />
				<HomePlayer spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
