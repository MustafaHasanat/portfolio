import styled from "styled-components";
import colors from "styles/colors";
// import fonts from "styles/fonts";

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  background: ${colors.blurred.purple};
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8rem;
`;

export const FloatingWindow = styled.div`
  opacity: ${(props) => props.hoverValue};
  width: 70%;
  position: absolute;
  top: -50%;
  background: ${colors.white};
  border-radius: 15px;
  box-shadow: 0px 0px 20px ${colors.blue};
  padding: 30px;
  display: grid;
  transition: 0.1s ease-in;
`;

export const Field = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  margin: 5px;
`;

export const SendButton = styled.button`
  width: 10%;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  background: ${colors.purple};
  color: ${colors.white};
  border-radius: 10px;
  border-style: none;
  height: 100%;
  cursor: pointer;
`;

