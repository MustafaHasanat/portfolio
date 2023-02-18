import {
  TechSkillsWrapper,
  StyledTitle,
  AnimatedImagesWrapper,
  InternalImagesWrapper,
} from "components/homePage/techSkills/tech-skills.styles";
import { techSkills } from "utils/constants";
import IconSkillWrapper from "components/homePage/iconSkillWrapper";

function TechSkills() {
  return (
    <TechSkillsWrapper>
      <StyledTitle>my technical skills</StyledTitle>

      <AnimatedImagesWrapper>
        {[0, 1, 2].map(() => {
          return (
            <InternalImagesWrapper speed={20}>
              {techSkills?.map(({ id, src }) => (
                <IconSkillWrapper id={id} src={src} />
              ))}
            </InternalImagesWrapper>
          );
        })}
      </AnimatedImagesWrapper>
    </TechSkillsWrapper>
  );
}

export default TechSkills;
