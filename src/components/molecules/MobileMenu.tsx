import CloseIcon from "@mui/icons-material/Close";
import { Dialog, IconButton, Box, Container } from "@mui/material";

import MyToolbar from "./MyToolbar";
import NavList from "./NavList";

interface Props {
  showMobileMenu: boolean;
  handleCloseMobileMenu: () => void;
}

const MobileMenu = ({ showMobileMenu, handleCloseMobileMenu }: Props) => {
  const onClickAfter = () => {
    handleCloseMobileMenu();
  };

  return (
    <Dialog fullScreen open={showMobileMenu}>
      <Container>
        <MyToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleCloseMobileMenu}
          >
            <CloseIcon />
          </IconButton>
        </MyToolbar>
        <Box p={2}>
          <NavList onClickAfter={onClickAfter} />
        </Box>
      </Container>
    </Dialog>
  );
};

export default MobileMenu;
