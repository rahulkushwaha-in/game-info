//BASE URL
const base_url = " https://api.rawg.io/api/";

//GEtting the date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//GEtting the date
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Geeting the year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const NextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games

const popular_games = `games?key=1434e44e104648d99e7bc6558a82aa1a&updates=${currentDate},${lastYear}&&ordering=-rating&page_size=9`;

//upcoming games
const upcoming_games = `games?key=1434e44e104648d99e7bc6558a82aa1a&dates=${currentDate},${NextYear}&&ordering=-added&page_size=9`;

//new games
const new_games = `games?key=1434e44e104648d99e7bc6558a82aa1a&dates=${lastYear},${currentDate}&&ordering=-released&page_size=9`;

export const getPopularGames = () => `${base_url}${popular_games}`;

export const getUpcomingGames = () => `${base_url}${upcoming_games}`;

export const getNewGames = () => `${base_url}${new_games}`;

//game details
export const getGameDetails = (game_id) =>
  `${base_url}games/${game_id}?key=1434e44e104648d99e7bc6558a82aa1a`;
//game screenshots
export const getGameScreenshots = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=1434e44e104648d99e7bc6558a82aa1a`;

//searh game
export const getSearchResults = (game_name) =>
  `${base_url}games?key=1434e44e104648d99e7bc6558a82aa1a&search=${game_name}&page_size=9`;
