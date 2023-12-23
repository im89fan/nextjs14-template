import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Container, IconButton, Typography } from "@mui/material";

import MyToolbar from "./MyToolbar";

interface Props {
  handleOpenMobileMenu: () => void;
}

const MyAppBar = ({ handleOpenMobileMenu }: Props) => {
  return (
    <AppBar>
      <Container>
        <MyToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{
              display: { md: "none" },
              mr: 2,
            }}
            onClick={handleOpenMobileMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            テンプレート
          </Typography>
        </MyToolbar>
      </Container>
    </AppBar>
  );
};

export default MyAppBar;
