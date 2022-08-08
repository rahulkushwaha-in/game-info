const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};
export default gamesReducer;
