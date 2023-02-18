import { AvatarImage } from "./upper-interface.styles";
import { FlexLayout, GlowingText } from "utils/shared";

function UpperInterface() {
  return (
    <FlexLayout vAlign="center">
      <GlowingText
        font={{ size: "3rem" }}
        text={{ color: "white" }}
        shadow={{ length: "10" }}
      >
        Address
      </GlowingText>

      <FlexLayout direction="column">
        <GlowingText
          font={{ size: "3rem" }}
          text={{ color: "white" }}
          shadow={{ length: "10" }}
        >
          Mustafa Alhasanat
        </GlowingText>
        <AvatarImage
          src="images\avatar.jpg"
          position="relative"
          radius="100%"
          width="25vw"
          height="25vw"
          shadow={{ length: "35", color: "white" }}
        />
        <GlowingText
          font={{ size: "3rem" }}
          text={{ color: "white" }}
          shadow={{ length: "10" }}
        >
          Software Engineer
        </GlowingText>
      </FlexLayout>
      <GlowingText
        font={{ size: "3rem" }}
        text={{ color: "white" }}
        shadow={{ length: "10" }}
      >
        Birthday
      </GlowingText>
    </FlexLayout>
  );
}

export default UpperInterface;
