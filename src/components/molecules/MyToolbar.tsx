import { Toolbar } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MyToolbar = ({ children }: Props) => {
  return (
    <Toolbar variant="dense" disableGutters sx={{ px: 2 }}>
      {children}
    </Toolbar>
  );
};

export default MyToolbar;
