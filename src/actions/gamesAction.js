import axios from "axios";
import {
  getPopularGames,
  getUpcomingGames,
  getNewGames,
  getSearchResults,
} from "../api";

//action creater

export const loadGames = () => async (dispatch) => {
  //fetch axios
  const popularData = await axios.get(getPopularGames());
  const upcomingData = await axios.get(getUpcomingGames());
  const newGamesData = await axios.get(getNewGames());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcomingGames: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearchResults = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(getSearchResults(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
