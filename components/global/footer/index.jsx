import {
  FooterWrapper,
  FloatingWindow,
  Field,
  SendButton,
} from "components/global/footer/footer.styles";
import { useState, useRef } from "react";
import { contacts } from "utils/constants";
import colors from "styles/colors";
import fonts from "styles/fonts";
import { FlexLayout, GlowingText } from "utils/shared";

function Footer() {
  const [hoverValue, setHoverValue] = useState(0.7);
  const messageFieldValue = useRef();
  const emailFieldValue = useRef();

  return (
    <FooterWrapper>
      <FloatingWindow
        hoverValue={hoverValue}
        onMouseEnter={() => {
          setHoverValue(1);
        }}
        onMouseLeave={() => {
          if (
            emailFieldValue.current?.value ||
            messageFieldValue.current?.value
          ) {
            setHoverValue(1);
          } else {
            setHoverValue(0.7);
          }
        }}
      >
        <GlowingText
          font={{ family: fonts.consolas, size: "40px" }}
          text={{ color: colors.purple }}
          shadow={{ length: 20, color: colors.black }}
          margin="0px 0px 30px 0px"
        >
          Send me a quick email
        </GlowingText>
        <FlexLayout>
          <FlexLayout direction="column" width="50%">
            <Field
              placeholder="example@email.com"
              ref={emailFieldValue}
              onChange={(event) => {
                if (event.target.value) {
                  setHoverValue(1);
                } else {
                  setHoverValue(0.7);
                }
              }}
            />
            <Field
              placeholder="Hello, I'd like to schedule a meeting with you!"
              ref={messageFieldValue}
              onChange={(event) => {
                if (event.target.value) {
                  setHoverValue(1);
                } else {
                  setHoverValue(0.7);
                }
              }}
            />
          </FlexLayout>
          <SendButton>Send</SendButton>
        </FlexLayout>
      </FloatingWindow>
      <FlexLayout width="80%">
        <FlexLayout direction="column" width="20%">
          {contacts.contactMethods.map((item) => {
            return <div>{item.name}</div>;
          })}
        </FlexLayout>
      </FlexLayout>
      <GlowingText
        font={{ size: "40px" }}
        text={{ color: colors.white }}
        shadow={{ length: 30, color: colors.pink }}
        margin="20px"
      >
        Mustafa Alhasanat
      </GlowingText>
    </FooterWrapper>
  );
}

export default Footer;
