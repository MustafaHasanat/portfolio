import styled, { keyframes } from "styled-components";
import colors from "styles/colors";
import { mq } from "styles/media-query";
import { IconImage } from "utils/shared";

const orbital = keyframes`
  0% {
    transform: rotateZ(0) translateX(12rem) rotateZ(0) rotateY(-70deg) rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg) translateX(12rem) rotateZ(-360deg) rotateY(-70deg) rotateZ(180deg);
  }
`;

const hidden = keyframes`
  0% {
    z-index: 5;
  }
  50% {
    z-index: 15;
  }
  100% {
    z-index: 5;
  }
`;

export const IonicAvatarWrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 30;
  margin-bottom: 25rem;
`;

export const IonicContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 30;
  padding-top: 8rem;
  margin-top: 5rem;

  ${mq.desktop`
    margin-top: calc(((100vh - 5.5rem) / 2) - 15rem);
  `}
`;

export const AnimatedTitle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  z-index: 30;
  margin-top: 3rem;
  padding-left: 1rem;
  font-weight: bold;
  font-size: 2rem;
  transition: 0.3s ease-in;
  color: ${colors.white};
  text-shadow: 0rem 0rem 1.5rem ${colors.white};
`;

export const AvatarPhoto = styled(IconImage)`
  z-index: 10;
`;

export const EllipsePath = styled.div`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  position: absolute;
  top: 2rem;
  transform-style: preserve-3d;
  transform: rotateZ(${(props) => props.rotateZ}deg)
    rotateY(${(props) => props.rotateY}deg);
  animation: ${hidden} 4s ease-in ${(props) => props.delay}s infinite;
`;

export const OrbitalIcon = styled(IconImage)`
  margin: auto;
  animation: ${orbital} 4s linear ${(props) => props.delay}s infinite;
`;



import { avatarIons } from "utils/constants";
import Typewriter from "typewriter-effect";

function IonicAvatar() {
  const changeTitleColor = (newColor) => {
    const element = document.getElementById("animated-title");
    element.style.textShadow = `0rem 0rem 1.5rem ${newColor}`;
  };

  return (
    <IonicAvatarWrapper>
      <AnimatedTitle id="animated-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to my portfolio!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Ask me about ")

              .callFunction(() => changeTitleColor("cyan"))
              .typeString("React")
              .pauseFor(1000)
              .deleteChars(5)

              .callFunction(() => changeTitleColor("green"))
              .typeString("Node JS")
              .pauseFor(1000)
              .deleteChars(7)

              .callFunction(() => changeTitleColor("yellow"))
              .typeString("Fast API")
              .pauseFor(1000)
              .deleteChars(8)

              .callFunction(() => changeTitleColor("red"))
              .typeString("Angular")
              .pauseFor(1000)

              .deleteAll()
              .callFunction(() => changeTitleColor("white"))
              .typeString("Mustafa Alhasanat's Portfolio")
              .start();
          }}
        />
      </AnimatedTitle>

      <IonicContainer>
        <AvatarPhoto
          src="images\avatar.jpg"
          position="absolute"
          radius="100%"
          width="12rem"
          height="12rem"
          shadow={{ length: "35", color: "white" }}
        />

        {avatarIons.map((ion) => {
          return (
            <EllipsePath
              key={ion.id}
              rotateZ={ion.rotateZ}
              rotateY={ion.rotateY}
              delay={ion.delay}
            >
              <OrbitalIcon
                key={`${ion.id} icon`}
                src={process.env.PUBLIC_URL + ion.src}
                delay={ion.delay}
                position="absolute"
                radius="50%"
                width="3rem"
                height="3rem"
                shadow={{ length: "25", color: ion.shadow }}
                pos={{
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                }}
              />
            </EllipsePath>
          );
        })}
      </IonicContainer>
    </IonicAvatarWrapper>
  );
}

export default IonicAvatar;
