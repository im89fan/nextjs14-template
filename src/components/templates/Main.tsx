import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

import MobileMenu from "../molecules/MobileMenu";
import MyAppBar from "../molecules/MyAppBar";
import MyToolbar from "../molecules/MyToolbar";
import NavList from "../molecules/NavList";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    matches && setShowMobileMenu(false);
  }, [matches]);

  const handleOpenMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <MyAppBar handleOpenMobileMenu={handleOpenMobileMenu} />
      <MyToolbar />
      <Container>
        <Box display="flex" p={2}>
          <Box
            position="sticky"
            top={64}
            height="100%"
            mr={2}
            sx={{
              display: { md: "block", xs: "none" },
            }}
          >
            <NavList />
          </Box>
          <Box component="main">{children}</Box>
        </Box>
      </Container>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />
    </>
  );
};

export default Main;
