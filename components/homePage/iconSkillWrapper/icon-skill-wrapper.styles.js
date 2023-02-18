import styled from "styled-components";
import { IconImage } from "utils/shared";

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SkillImage = styled(IconImage)`
  object-fit: contain;
  z-index: 20;

  &:last-of-type {
    padding-left: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
