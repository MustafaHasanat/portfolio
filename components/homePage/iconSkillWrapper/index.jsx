import {
  SkillImage,
  ImageWrapper,
} from "components/homePage/iconSkillWrapper/icon-skill-wrapper.styles";
import { BsFillHexagonFill } from "react-icons/bs";
import { useState } from "react";
import colors from "styles/colors";

function IconSkillWrapper({ id, src }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ImageWrapper>
      <BsFillHexagonFill
        size={150}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        color={isHovered ? colors.purple : colors.white}
        style={{ position: "absolute" }}
      />
      <SkillImage
        key={id}
        src={src}
        alt={id}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        position="absolute"
        radius="50%"
        width="6rem"
        height="6rem"
      />
    </ImageWrapper>
  );
}

export default IconSkillWrapper;
