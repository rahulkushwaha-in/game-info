import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
const Game = ({ name, released, image, id, slug }) => {
  //lod detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <GameCard onClick={loadDetailHandler}>
      <Link to={`/game/${slug}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image,640)} alt={name} />
      </Link>
    </GameCard>


  );
};

const GameCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
`;

export default Game;
