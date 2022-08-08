import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
//importing stars

import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import { smallImage } from "../util";

const GameDetail = () => {
  //svg icons seleector
  const svgSelector = (platform) => {
    switch (platform) {
      case "Xbox One":
        return xbox;
      case "PlayStation 4":
        return playstation;
      case "Nintendo Switch":
        return nintendo;
      case "PC":
        return steam;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //star importing to rating
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(gameDetail.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  //exit detail
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { screen, gameDetail, isLoading } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{gameDetail.name}</h3>
                <p>Rating: {gameDetail.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetail.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={svgSelector(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={smallImage(gameDetail.background_image,1280)} alt="" />
            </Media>
            <Description>
              <p>{gameDetail.description_raw} </p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={smallImage(screen.image,1280)} alt="" key={screen.id} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const Detail = styled(motion.div)`
  width: 80%;

  border-radius: 1rem;
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 2rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 3rem;
`;

export default GameDetail;
