import React from 'react'
import styled from 'styled-components'


const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one1.svg" alt=""></CTALogoOne>
          <SignUp className="button">GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt=""></CTALogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}
const Container = styled.section`
 height : 100vh;
 display : flex;
 overflow: hidden;
 flex-direction: column;
 text-align: center;
 background-size: cover;
 background-position: center;
`
const Content = styled.div`
display:flex;
align-items: center;
justify-content: center;
min-height: 100vh;
margin-bottom: 10vw;
width: 100%;
position: relative;
box-sizing: border-box;
flex-direction: column;
padding: 80px  40px;
height: 100%;
`
const BgImage = styled.div`
     height : 100%;
     background-image: url('/images/login-background.jpg');
     position: absolute;
     left: 0;
     top: 0;
     right: 0;
     background-size: cover;
     z-index: -1;

`

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.button`
  padding: 20px 0px;
  background-color: #0063e5;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.4rem;
  outline: none;
  border: 0;
  letter-spacing: 1.5px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
   background-color: #0483ee;
  }
`;

const Description = styled.p`
color : #F3F3F3;
font-size: 12px;
word-spacing: 2px;
letter-spacing: 1px;
margin: 14px 5px;
max-width: 600px;
width: 100%;
line-height: 1.5;
`;

const CTALogoTwo = styled.img`
 margin-top: 10px;
 max-width: 600px;
 width: 100%;
`

export default Login