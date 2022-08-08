import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/game";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

function Home() {
  //get the current loaction
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //getting data back from the store
  const { popular, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      {path && <GameDetail />}
      {searched.length ? (
      <div className="searched">
      <h2>Searched Games</h2>
      <Games>
        {searched.map((game) => (
          <Game
            slug={game.slug}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      </div> ) : null}

      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.map((game) => (
          <Game
            slug={game.slug}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            slug={game.slug}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            slug={game.slug}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 3rem;
  h2 {
    padding: 3rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
`;

export default Home;
