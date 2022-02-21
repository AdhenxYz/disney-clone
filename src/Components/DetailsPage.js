import React from 'react'
import styled from 'styled-components';

function DetailsPage() {
  return (
    <Container>
      <Background>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img src="/images/logo-frozen2.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <Addbutton>
          <span>+</span>
        </Addbutton>
        <GrupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GrupWatchButton>
      </Controls>
      <Subtitle>2019 * 1h 7m * Family, Fantasy, Kids, Animation</Subtitle>
      <Desc>
        Kenapa Elsa terlahir dengan kekuatan magis? Jawabannya memanggilnya dan
        mengancam kerajaannya. Bersama Anna, Kristoff, Olaf, dan Sven, Elsa
        pergi melakukan sebuah petualangan berbahaya sekaligus menakjubkan.
      </Desc>
    </Container>
  );
}

export default DetailsPage

const Container = styled.div`
    min-height: calc(100vh- 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vw;
    z-index: 10;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249. 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgb(198, 198, 198);

    }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const Addbutton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GrupWatchButton = styled(Addbutton)`
  bacground: rgb(0,0,0);
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

`

const Desc = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;