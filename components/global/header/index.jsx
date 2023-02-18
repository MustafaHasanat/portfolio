import { MdOutlineMenu } from "react-icons/md";
import { navbarItems } from "utils/constants";
import {
  HeaderWrapper,
  Logo,
  MenuButton,
  Navbar,
  ListItem,
  Drawer,
} from "components/global/header/header.styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ headerTransform }) {
  const [activeNavItem, setActiveNavItem] = useState(
    navbarItems.map((item) => {
      return {
        id: item.id,
        state: item.link === window.location.pathname ? true : false,
      };
    })
  );

  const handleMenuButtonClick = () => {
    const menuButton = document.getElementById("menu-button");
    if (menuButton.style.transform === "none") {
      menuButton.style.transform = "translate(-100%)";
    } else {
      menuButton.style.transform = "none";
    }
  };

  const handleMenuItemClick = (item) => {
    setActiveNavItem(
      activeNavItem.map((subItem) => {
        return {
          id: subItem.id,
          state: subItem.id === item.id ? true : false,
        };
      })
    );
  };

  const getNavbarComponents = (element) => {
    return navbarItems.map((item) => {
      return (
        <NavLink
          to={item.link}
          style={{ textDecoration: "none" }}
          key={`${element} link number: ${item.id}`}
        >
          <ListItem
            key={`${element} item number: ${item.id}`}
            isActive={activeNavItem[item.id].state}
            onClick={() => {
              handleMenuItemClick(item);
            }}
          >
            {item.title}
          </ListItem>
        </NavLink>
      );
    });
  };

  return (
    <HeaderWrapper transform={headerTransform}>
      <MenuButton onClick={handleMenuButtonClick}>
        <MdOutlineMenu size="100%" color="white" />
      </MenuButton>

      <Logo src="icons/logo.png" />

      <Navbar>{getNavbarComponents("navbar")}</Navbar>
      <Drawer id="menu-button">{getNavbarComponents("drawer")}</Drawer>
    </HeaderWrapper>
  );
}

export default Header;
