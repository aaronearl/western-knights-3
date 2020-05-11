import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import scrollToElement from "scroll-to-element";
import { slide as Menu } from "react-burger-menu";

import ButtonLink from "./ButtonLink";
import Name from "./Name";

import { media } from "../utils/style";

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  z-index: 10000;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 24px;
  }
`;

const MenuBox = styled(Box)``;

const NameBox = styled(Box)``;

const MenuItem = styled(ButtonLink)`
  font-family: "Raleway";
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-right: 32px;
  height: 62px;
  font-size: 18px;
  float: right;
  position: relative;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  ${media.sm`
    font-size: 16px;
    float: left;
    margin-right: 15px;
   `}
`;

const DesktopMenuWrapper = styled.ul`
  ${media.sm`
    display: none;
  `}
`;

const BurgerMenuWrapper = styled.div`
  display: none;
  ${media.sm`
    display: block;
  `}
`;

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "16px",
    top: "16px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
};

const NavBar = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <Base>
      <Flex>
        <NameBox px={2} width={[1, 1 / 3, 2 / 6]}>
          <Name />
        </NameBox>
        {!props.noMenu ? (
          <MenuBox px={2} width={[0, 2 / 3, 4 / 6]}>
            <DesktopMenuWrapper>
              {props.menu.map(({ node: item }) => (
                <li key={item.id}>
                  <MenuItem
                    onClick={() => {
                      scrollToElement(item.link);
                    }}
                    aria-label={item.title}
                  >
                    {item.title}
                  </MenuItem>
                </li>
              ))}
            </DesktopMenuWrapper>

            <BurgerMenuWrapper>
              <Menu
                right
                styles={styles}
                isOpen={menuOpenState}
                onStateChange={(state) => setMenuOpenState(state.menuOpenState)}
              >
                {props.menu.map(({ node: item }) => (
                  <MenuItem
                    onClick={() => {
                      setMenuOpenState(false);
                      scrollToElement(item.link);
                    }}
                    aria-label={item.title}
                    key={item.id}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </BurgerMenuWrapper>
          </MenuBox>
        ) : (
          <></>
        )}
      </Flex>
    </Base>
  );
};

export default NavBar;
