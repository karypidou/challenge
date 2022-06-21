import React, { FC } from "react"
import sixtLogo from '../sixtLogo.png';
import styled from "styled-components"

const StyledLine = styled.div`
  width: 100%;
  height: 24px;
  background: black;
`
const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
`
const StyledLogoLine = styled.div`
  width: 100%;
  height: 56px;
  display: inline-flex;
  img {
    height: auto;
  }
`

export const Header: FC = () => {
  return <StyledHeader>
    <StyledLine/>
    <StyledLogoLine>
      <img src={sixtLogo} />
    </StyledLogoLine></StyledHeader>
}