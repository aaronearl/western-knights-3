import React from "react";
import styled, { css } from "styled-components";

import { media } from "../utils/style";

import Pattern from "../images/pattern.gif";

const Base = styled.a`
  font-size: 20pt;
  font-family: 'Pacifico', cursive;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(${Pattern});
    text-decoration: none;
    -webkit-transform:rotate(354deg);
  }
  ${(props) =>
    props.dark &&
    css`
      color: #444;
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
    `}
  ${(props) =>
    props.small &&
    css`
      font-size: 1em;
    `}
  ${(props) =>
    props.big &&
    css`
      font-size: 2em;
    `}
  ${media.xs`
    font-size: 14pt;
  `}
`;

class Name extends React.Component {
  render() {
    return (
      <Base {...this.props} href="/">
        Western Knights Lodge #56
      </Base>
    );
  }
}

export default Name;
