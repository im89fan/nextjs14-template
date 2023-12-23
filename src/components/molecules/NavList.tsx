import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import { MenuList, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import { useRouter } from "next/router";

const navLinks = [
  { label: "ホーム", icon: HomeIcon, url: "/" },
  { label: "サンプル", icon: PublicIcon, url: "/sample" },
];

interface Props {
  onClickAfter?: () => void;
}

const NavList = ({ onClickAfter }: Props) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
    onClickAfter && onClickAfter();
  };

  return (
    <MenuList disablePadding>
      {navLinks.map((navLink) => (
        <MenuItem
          key={navLink.label}
          selected={router.pathname === navLink.url}
          onClick={() => handleClick(navLink.url)}
        >
          <ListItemIcon>
            <navLink.icon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{navLink.label}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default NavList;
