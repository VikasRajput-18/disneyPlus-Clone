import React from "react";
import styled from "styled-components";

const Viewer = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div``;

const Container = styled.section`
  display: grid;
  padding-right: 20px;

  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 50px;
  ${Wrap} {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #444;
    position: relative;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
      width: 100%;
      z-index: 2;
    }
    video {
      width: 100%;
      height: 100%;
      position: absolute;

      z-index: 1;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    &:hover video {
      opacity: 1;
    }

    &:hover {
      border: 4px solid #ccc;
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Viewer;
