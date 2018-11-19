import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components'

const StyledText = styled.div`
  color: white;
  font-size: 5vw;
  padding: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const image = "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8c03c98f431a4dbbfb5f93962fa44e7&auto=format&fit=crop&w=1633&q=80"

const Background = () => (
  <div>
    {/* -----dynamic blur-----*/}
    <Parallax bgImage={image} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <StyledText>Hi. I'm John.</StyledText>
      </div>
    </Parallax>
  </div>
);
export default Background;