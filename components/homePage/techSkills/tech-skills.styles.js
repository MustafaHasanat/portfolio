import styled, { keyframes } from "styled-components";
import colors from "styles/colors";

const swipe = keyframes`
    0% {
      transform: translate(0);
    }

    100% {
      transform: translate(-100%);
    }
  `;

export const TechSkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5rem 0rem 5rem 0rem;
`;

export const StyledTitle = styled.div`
  color: ${colors.white};
  font-size: 3rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

export const AnimatedImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 3rem 0rem 3rem 0rem;
  margin: 0rem 0rem 10rem 0rem;
`;

export const InternalImagesWrapper = styled.section`
  display: flex;
  position: relative;
  transition: 0.3s ease;
  animation: ${swipe} ${(props) => props.speed}s linear infinite backwards;
`;
