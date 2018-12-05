import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'

const StyledWrapper = styled.div`
  text-align: center;
`

const StyledImageContainer = styled.div`
  height: 400px;
`

const StyledText = styled.div`
  color: white;
  font-size: 80px;
  padding: 20px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 1;
  white-space: nowrap;
  

  /* @media(min-width: 1000px) {
      font-size: 40px;
  }
  @media(max-width: 600px) {
      font-size: 50px;
      line-height: 1;
  } */
`
const Profile = styled(Image)`
  border: 2px solid white;
  margin-top: 50px;

`

// const image = "https://images.unsplash.com/photo-1482376297902-a54c222cec2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b054282b3f7a02bdca851ae7f09802cc&auto=format&fit=crop&w=1650&q=80"

const image = "https://images.unsplash.com/photo-1504521580062-62f6725691a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"

const Background = () => (
  <StyledWrapper>
    <Parallax bgImage={image} strength={500}>
      <StyledImageContainer >
        <Profile src='/images/profile.jpg' size='small' circular centered spaced />

        <StyledText>
          Hi. I'm John.
             </StyledText>
      </StyledImageContainer >
    </Parallax>
  </StyledWrapper>
);
export default Background;