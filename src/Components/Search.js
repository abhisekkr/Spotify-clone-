import React, { useState, useRef } from "react";
import "./style/Search.css";
import SpotifyWebApi from "spotify-web-api-js";
//components
import Header from "./Header";
import AlbumCard from "./AlbumCard";

const spotify = new SpotifyWebApi();

function Search() {
	const [search, setSearch] = useState("");
	const searchInput = useRef(null);
	const [searchResult, setSearchResult] = useState([]);

	const onUserInput = (queryTerm) => {
		spotify.searchTracks(queryTerm, { limit: 25 }).then((response) => {
			setSearchResult(response);
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		onUserInput(search);
	};

	return (
		<div className="search">
			<div className="search__container">
				<div className="search__header">
					<Header />
					<form>
						<input
							type="search"
							ref={searchInput}
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search for Artists, songs, or Podcasts"
						/>
						<button
							type="submit"
							style={{ display: "none" }}
							onClick={(e) => handleClick(e)}
						/>
					</form>
				</div>
				<div className="search__result">
					{searchResult?.tracks?.items.map((item) => (
						<div className="search__results" key={item.id}>
							<AlbumCard
								image={item.album.images[1].url}
								songName={item.name}
								singer={item.artists[0].name}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Search;
