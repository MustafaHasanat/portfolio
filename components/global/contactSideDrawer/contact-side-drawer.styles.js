import styled from "styled-components";
import colors from "styles/colors";
import { IconImage, FlexLayout } from "utils/shared";

export const SideDrawerWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: calc((100vh / 2) - 5rem);
  z-index: 40;
  transition: 0.5s ease-in-out;
  transform: ${props => props.transition};
`;

export const ArrowWrapper = styled.div`
  position: relative;
  left: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50% 0 0 50%;
  background: ${colors.purple};
  box-shadow: 0px 0px 10px ${colors.white};
  cursor: pointer;
`;

export const ContactsBox = styled(FlexLayout)`
  width: 5rem;
  height: 18rem;
  background: ${colors.darkPurple};
  z-index: 40;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0px 0px 10px ${colors.white};
`;

export const ContactImage = styled(IconImage)`
  cursor: pointer;
`;
