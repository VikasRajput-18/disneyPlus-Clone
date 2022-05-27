import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectnewDisney } from "../features/movies/movieSlice";

const NewDisney = (props) => {
  
  const movies =useSelector(selectnewDisney);


  return (
    <Container>
      <h3 style={{ marginTop: "40px", paddingLeft: "10px" }}>
        New to Disney +
      </h3>
      <Content>
          {movies &&
            movies.map((movie, key)=>(
              <Wrap key ={key}>
               <NavLink to = {'/detail/' + movie.id}>
                 <img src={movie.cardImg} alt={movie.title} />
               </NavLink>

              </Wrap>
            ))}
      </Content>
    </Container>
  );
};

const Wrap = styled.div`
  border: 2px solid grey;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover {
    border: 3px solid #ccc;
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.main``;
const Content = styled.main`
  /* width: 100%; */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 10px;
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right: 20px;
  padding-top: 15px;
`;

export default NewDisney;
