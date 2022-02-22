import React from 'react'
import styled from 'styled-components';


function Login() {
  return (
  <Container>
      <ContentBox>
        <CTAlogo src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>Get Premier Access to Raya and Frozen II for with a Disney+ subscription. As of 03/26/21, the price and The Disney Bundle will Increase by $1</Description>
        <CTAlogoTwo src="/images/cta-logo-two.png" />
      </ContentBox>
  </Container>);
}

export default Login

const Container = styled.div`
    position : relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        position absolute;
        top: 0;
        bottom : 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

const ContentBox = styled.div`
    max-width:650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
`

const CTAlogo = styled.img``

const SignUp = styled.a`
  width: 100%;
  background-color: blue;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover{
      letter-spacing: 1.5px;
      background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
const CTAlogoTwo = styled.img``