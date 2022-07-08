import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store";
// import { useStyles } from "./utils";
const Header = () => {
  // const classes = useStyles();
  // const dispath = useDispatch();
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar 
    position = "sticky"
    sx={{
      background:
        "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
    }}>
      <Toolbar>
        <Typography variant="h4">
          BlogsApp
        </Typography>
        <Box display="flex" marginLeft={'auto'} marginRight= "auto">
          <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
            <Tab label="All Blogs" />
            <Tab label="My Blogs" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">          
          <Button variant="contained" sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
          <Button variant="contained" sx={{ margin: 1, borderRadius: 10 }} color='warning'>Signup</Button>
          <Button variant="contained" sx={{ margin: 1, borderRadius: 10 }} color='warning'>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;