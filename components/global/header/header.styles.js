import styled from "styled-components";
import { mq } from "styles/media-query";
import fonts from "styles/fonts";
import colors from "styles/colors";

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 5.5rem;
  background: ${colors.blurred.purple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  z-index: 50;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  border-bottom: 0.1rem solid ${colors.pink};
  transition: 0.2s ease-in;
  transform: ${(props) => props.transform};
  
  ${mq.desktop`
    justify-content: space-between;
  `}
`;

export const Logo = styled.img`
  position: absolute;
  left: calc((100vw - 4rem) / 2);
  top: calc((5.5rem - 4rem) / 2);
  width: 4rem;
  height: 4rem;

  ${mq.desktop`
    position: relative;
    left: 0;
    top: 0;
    margin-left: 2rem;
  `}
`;

export const MenuButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  ${mq.desktop`
    display: none;
  `}
`;

export const Drawer = styled.ul`
  position: fixed;
  top: 5.5rem;
  left: 0;
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-family: ${fonts.consolas};
  list-style-type: none;
  margin: 0;
  padding: 1.5rem;
  z-index: 100;
  background: ${colors.darkPurple};
  transform: translate(-100%);
  transition: ease-in 0.5s;

  ${mq.desktop`
    display: none;
  `}
`;

export const Navbar = styled.ul`
  display: none;
  height: 100%;
  font-family: ${fonts.consolas};
  list-style-type: none;
  margin: 0;
  margin-right: 2rem;
  padding: 0;

  ${mq.desktop`
    display: flex;
    align-items: center;
  `}
`;

export const ListItem = styled.li`
  margin-left: 0;
  margin-bottom: 2rem;
  padding: 0.7rem;
  background: ${props =>  props.isActive ? colors.white : colors.black };
  color: ${ props =>  props.isActive ? colors.purple : colors.white };
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  transition: ease-in 0.15s;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 0px 5px white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${colors.purple};
    background: ${colors.white};
  }

  ${mq.desktop`
    margin-left: 2rem;
    margin-bottom: 0;
    height: 70%;

    &:hover {
      transform: scale(1.2) rotate(-5deg);
    }
  `}
`;
