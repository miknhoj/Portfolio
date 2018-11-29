import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components'

const StyledWrapper = styled.div`
  text-align: center;
`

const StyledImageContainer = styled.div`
  height: 500px;
`

const StyledText = styled.div`
  color: white;
  font-size: 80px;
  padding: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 1;


  /* @media(min-width: 1000px) {
      font-size: 40px;
  }
  @media(max-width: 600px) {
      font-size: 50px;
      line-height: 1;
  } */
`

const image = "https://images.unsplash.com/photo-1482376297902-a54c222cec2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b054282b3f7a02bdca851ae7f09802cc&auto=format&fit=crop&w=1650&q=80"

const Background = () => (
  <StyledWrapper>
    <Parallax bgImage={image} style={{backgroundPosition: 'bottom'}} >
      <StyledImageContainer >
        <StyledText>Hi. I'm John.</StyledText>
      </StyledImageContainer >
    </Parallax>
  </StyledWrapper>
);
export default Background;