import { Box, MenuItem } from "@mui/material";
import { myList } from "./NavbarData";
import { useNavigate } from "react-router-dom";

const NavbarMenu = () => {
  const navigate = useNavigate();

  
  
  return (
    <Box display='flex' justifyContent='space-between' >
      {myList.map((item) => {
        return (
          <MenuItem
            key={item.text}
            sx={{ p: 3,borderRadius:10 }}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.text}
          </MenuItem>
        );
      })}
    </Box>
  );
};

export default NavbarMenu;
