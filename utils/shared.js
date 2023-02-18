import styled from "styled-components";
// import colors from "styles/colors";
import fonts from "styles/fonts";

export const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.vAlign || "flex-start"};
  align-items: ${(props) => props.hAlign || "center"};
  width: ${(props) => props.width || "100%"};
`;

export const PositionedLayout = styled.div`
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "none"};
  bottom: ${(props) => props.bottom || "none"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
`;

export const FlexLayout = styled.div.attrs((props) => ({
  direction: props.direction || "row",
}))`
  display: flex;
  flex-direction: ${(props) => props.direction};

  justify-content: ${(props) =>
    props.direction === "column"
      ? props.vAlign || "flex-start"
      : props.hAlign || "center"};
  align-items: ${(props) =>
    props.direction === "column"
      ? props.hAlign || "center"
      : props.vAlign || "flex-start"};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "none"};
`;

export const IconImage = styled.img`
  position: ${(props) => props.position};
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: 0px 0px ${(props) => props.shadow?.length || 0}px
    ${(props) => props.shadow?.color || "white"};
  top: ${(props) => props.pos?.top || "none"};
  bottom: ${(props) => props.pos?.bottom || "none"};
  left: ${(props) => props.pos?.left || "none"};
  right: ${(props) => props.pos?.right || "none"};
`;

export const GlowingText = styled.p`
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  font-family: ${(props) => props.font?.family || fonts.cantataOne};
  font-size: ${(props) => props.font?.size || "5rem"};
  font-weight: ${(props) => props.font?.weight || "bold"};
  text-align: ${(props) => props.text?.align || "center"};
  color: ${(props) => props.text?.color || "white"};
  text-shadow: 0px 0px ${(props) => props.shadow?.length || 10}px
    ${(props) => props.shadow?.color || "white"};
`;


