import {
  SideDrawerWrapper,
  ArrowWrapper,
  ContactsBox,
  ContactImage,
} from "components/global/contactSideDrawer/contact-side-drawer.styles";
import { contacts } from "utils/constants";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState } from "react";
import colors from "styles/colors";

function ContactSideDrawer() {
  const [drawerIsOpened, setDrawerIsOpened] = useState(false);
  const [drawerTransition, setDrawerTransition] = useState("translate(5.5rem)");

  return (
    <SideDrawerWrapper transition={drawerTransition}>
      <ArrowWrapper
        onClick={() => {
          setDrawerIsOpened((prev) => !prev);
          setDrawerTransition((prev) =>
            prev === "none" ? "translate(5.5rem)" : "none"
          );
        }}
      >
        {drawerIsOpened ? (
          <MdOutlineArrowForwardIos color={colors.white} size={30} />
        ) : (
          <MdOutlineArrowBackIos color={colors.white} size={30} />
        )}
      </ArrowWrapper>

      <ContactsBox direction="column" vAlign="space-evenly">
        {contacts.contactMethods.map((item, index) => {
          return (
            <ContactImage
              key={`icon wrapper image number: ${index}`}
              src={item.src}
              width="3rem"
              height="3rem"
              radius="0%"
            />
          );
        })}
      </ContactsBox>
    </SideDrawerWrapper>
  );
}

export default ContactSideDrawer;
