import axios from "axios";
import { getGameDetails, getGameScreenshots } from "../api";

//loading the game details function

export const loadDetail = (game_id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const detaildata = await axios.get(getGameDetails(game_id));
  const screenshotdata = await axios.get(getGameScreenshots(game_id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      gameDetail: detaildata.data,
      screen: screenshotdata.data,
    },
  });
};
