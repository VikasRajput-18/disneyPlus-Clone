import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase'

const Detail = (props) => {

  const  {id} = useParams();
  const [detailData , setDetailData] = useState({});

  useEffect(() => {

    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=>{
      if(doc.exists){
        setDetailData(doc.data())
      }else{
        console.log("No such Data Exist")
      }
    }).catch(error =>{
       console.log("Error Getting" , error)
    })
  
  }, [id]);
  
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </Trailer>
          <AddList>
            <span>+</span>
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Discription>{detailData.description}</Discription>
      </ContentMeta>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
  top: 95px;
  color: white;
  display: block;
  min-height: calc(100vh-250px);
  overflow-y: hidden;
  padding: 0 calc(3.5vw + 5px);
  @media screen and (max-width: 768px) {
    padding:0 calc(1vw + 5px);
  }
`;

const Background = styled.div`
    position: fixed;
    width : 100%;
    height:100%;
    opacity: 0.8;
    top:70px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;


    img{
        width: 100vw;
        height: 100vh;

        @media screen and ( max-width : 768px) {
             width: initial;
        }
    }
    
    `
const ImageTitle = styled.div`
    align-items: flex-start;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    width: 100%;
    padding-bottom: 24px;

   img{
       max-width: 600px;
       min-width: 200px;
       width: 35vw;
   }
`

const ContentMeta = styled.div`
  max-width: 874px;
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`

const Player = styled.button`
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  height: 60px;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  img {
    width: 32px;
  }

  &:hover {
    background-color: #aaa;
  }

  @media screen and (max-width: 768px) {
    height: 45px;
    padding: 5px 15px;
    img {
      width: 25px;
    }
  }

  span {
    letter-spacing: 1px;
    font-size: 1.1rem;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid #ccc;
  border-radius: 8px;
  color: white;
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 32px;
  }

  &:hover {
    background-color: #555;
  }

  @media screen and (max-width: 768px) {
    height: 45px;
    padding: 5px 15px;
    font-size: 0.9rem;
    margin-left: 10px;

    img {
      width: 25px;
    }
  }

  span {
    font-size: 1.1rem;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const AddList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ccc;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin-left: 10px;
  }

  span {
    font-size: 3rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const GroupWatch = styled(AddList)`
   
`
const SubTitle = styled.div`
  font-size: 15px;
  color: #f9f9f9;
  min-height: 20px;

  @media screen and (max-width : 768px) {
        font-size:12px;
  }
`
const Discription = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 20px 0px;
  color: #f9f9f9;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail