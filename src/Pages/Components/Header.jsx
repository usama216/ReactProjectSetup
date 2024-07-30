

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Divider,
//   Drawer,
//   IconButton,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogout } from "../../store/actions/authActions";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();


//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };

//   const handleLogin = () => {
// navigate('/sign-in')
//     setDrawerOpen(false);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const dispatch = useDispatch();

//   const handleMenuItemClick = (value) => {
//     if (value === "Logout") {
//       dispatch(userLogout());
//       dispatch({
//         type: "RESET_STATE",
//       });
//     }
//   };

//   const currentPath = location.pathname;

//   const isHidden =
//     currentPath === "/sign-up" ||
//     currentPath === "/sign-in" ||

//     currentPath === "/forget-password" ||
//     currentPath === "/otp-verification" ||
//     currentPath === "/set-password" ||

//     currentPath === "/admin-dashboard" ||
//     currentPath === "/otp-verification" ||
//     currentPath === "/contact-us" ||

//     currentPath === "/participant-registered";

//   if (isHidden) {
//     return null;
//   }



//   const menuItems = [
//     { label: "Home", route: "/" },
//     { label: "Courses", route: "/advance-course" },
//     { label: "About", route: "/about-us" },
//     { label: "Faq's", route: "/faqs" },
//     { label: "Blogs", route: "/blogs" },
//     { label: "Contact", route: "/contact-us" },
//   ];


//   return (
//     <Box
//       sx={{
//         backgroundColor: "transparent",
//         padding: "2rem 10%",
//         color: "white",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//       }}
//     >
//       <Box>
//         <Typography variant="h5" sx={{ fontWeight: "bold", cursor: "pointer" }}>
//           Logo
//         </Typography>
//       </Box>

//       <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 5 }}>
//         {menuItems.map((item, index) => (
//           <Typography
//             key={index}
//             onClick={() => {
//               navigate(item.route);
//               setDrawerOpen(false);
//             }}
//             sx={{ fontSize: "1.1rem", cursor: "pointer" }}
//           >
//             {item.label}
//           </Typography>
//         ))}
//       </Box>

//       <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 5 }}>
//         <Button
//           onClick={handleLogin}
//           variant="contained"
//           size="small"
//           sx={{
//             backgroundColor: theme.palette.primary.main,
//             padding: "0.5rem 2rem",
//             textTransform: "none",
//             fontSize: "0.9rem",
//             marginLeft: "1rem",
//             borderRadius: "0px",
//           }}
//         >
//           Get Started
//         </Button>
//       </Box>

//       <Box sx={{ display: { xs: "flex", sm: "none" } }}>
//         <IconButton onClick={handleDrawerOpen} sx={{ color: "white" }}>
//           <MenuIcon />
//         </IconButton>
//         <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
//           <Box sx={{ width: 250, padding: "20px" }}>
//             <IconButton
//               onClick={handleDrawerClose}
//               sx={{ position: "absolute", top: "10px", right: "10px" }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <br/>
//             <br/>

//             {menuItems.map((item, index) => (
//               <Box key={index}>
//                 <Typography
//                   variant="h6"
//                   onClick={() => {
//                     navigate(item.route);
//                     setDrawerOpen(false);
//                   }}
//                   sx={{ marginBottom: 2, marginTop:1, cursor: "pointer" }}
//                 >
//                   {item.label}
//                 </Typography>
//                 {index < menuItems.length - 1 && <Divider />}
//               </Box>
//             ))}
//             <Box sx={{ marginTop: 2 }}>
//               <Button
//                 variant="contained"
//                 onClick={handleLogin}
//                 sx={{
//                   padding: "0.8rem 0rem",
//                   borderRadius: "0px",
//                   width: "100%",
//                 }}
//               >
//                 Get Started
//               </Button>
//             </Box>
//           </Box>
//         </Drawer>
//       </Box>
//     </Box>
//   );
// };

// export default Header;




import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/actions/authActions";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown anchor

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleLogin = () => {
    navigate('/sign-in');
    setDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      dispatch(userLogout());
      dispatch({
        type: "RESET_STATE",
      });
    }
  };

  const handleCoursesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemSelect = (route) => {
    navigate(route);
    setAnchorEl(null);
  };

  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/sign-up" ||
    currentPath === "/sign-in" ||
    currentPath === "/forget-password" ||
    currentPath === "/otp-verification" ||
    currentPath === "/set-password" ||
    currentPath === "/admin-dashboard" ||
    currentPath === "/contact-us" ||
    currentPath === "/participant-registered"||
    currentPath === "/student-dashboard";


  if (isHidden) {
    return null;
  }

  const menuItems = [
    { label: "Home", route: "/" },
    {
      label: "Courses",
      route: null, // Route is null since we will use dropdown
    },
    { label: "About", route: "/about-us" },
    { label: "Faq's", route: "/faqs" },
    { label: "Blogs", route: "/blogs" },
    { label: "Contact", route: "/contact-us" },
  ];

  const courseOptions = [
    { label: "Advanced Course", route: "/advanced-course" },
    { label: "Beginner Course", route: "/beginner-course" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: "2rem 10%",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", cursor: "pointer" }}>
          Logo
        </Typography>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 5 }}>
        {menuItems.map((item, index) => (
          item.route ? (
            <Typography
              key={index}
              onClick={() => {
                navigate(item.route);
                setDrawerOpen(false);
              }}
              sx={{ fontSize: "1.1rem", cursor: "pointer" }}
            >
              {item.label}
            </Typography>
          ) : (
            <Typography
              key={index}
              onClick={handleCoursesClick}
              sx={{ fontSize: "1.1rem", cursor: "pointer", display: 'flex', alignItems: 'center' }}
            >
              {item.label}
              <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
            </Typography>
          )
        ))}
      </Box>

      <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 5 }}>
        <Button
          onClick={handleLogin}
          variant="contained"
          size="small"
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: "0.5rem 2rem",
            textTransform: "none",
            fontSize: "0.9rem",
            marginLeft: "1rem",
            borderRadius: "0px",
          }}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton onClick={handleDrawerOpen} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <Box sx={{ width: 250, padding: "20px" }}>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>
            <br/>
            <br/>

            {menuItems.map((item, index) => (
              <Box key={index}>
                {item.route ? (
                  <Typography
                    variant="h6"
                    onClick={() => {
                      navigate(item.route);
                      setDrawerOpen(false);
                    }}
                    sx={{ marginBottom: 2, marginTop:1, cursor: "pointer" }}
                  >
                    {item.label}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    onClick={handleCoursesClick}
                    sx={{ marginBottom: 2, marginTop:1, cursor: "pointer", display: 'flex', alignItems: 'center' }}
                  >
                    {item.label}
                    <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
                  </Typography>
                )}
                {index < menuItems.length - 1 && <Divider />}
              </Box>
            ))}
            <Box sx={{ marginTop: 2 }}>
              <Button
                variant="contained"
                onClick={handleLogin}
                sx={{
                  padding: "0.8rem 0rem",
                  borderRadius: "0px",
                  width: "100%",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>

      {/* Courses Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {courseOptions.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleMenuItemSelect(option.route)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Header;
