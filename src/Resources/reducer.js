export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case "GET_ALBUMS":
			return {
				...state,
				sample_albums: action.sample_albums,
			};

		case "GET_ARTIST_ALBUMS":
			return {
				...state,
				artist_albums: action.artist_albums,
			};

		case "GET_NEW_RELEASES":
			return {
				...state,
				new_albums: action.new_albums,
			};

		case "SET_CURRENT_SONG":
			return {
				...state,
				current_song: action.current_song,
			};

		case "SET_SELECTED_ALBUM":
			return {
				...state,
				selected_album: action.selected_album,
			};

		default:
			return state;
	}
};

export default reducer;
