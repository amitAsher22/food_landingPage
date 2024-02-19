import React, { useState } from "react";
import logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundeIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Texstimonials", icon: <CommentRoundeIcon /> },
    { text: "Contct", icon: <PhoneRoundedIcon /> },
    { text: "Cart", icon: <ShoppingCartRoundedIcon /> },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="logod" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Texstimonials</a>
        <a href="">Contct</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Booking Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <div>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
