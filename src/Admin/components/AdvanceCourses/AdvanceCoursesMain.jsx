import { useTheme } from '@emotion/react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Menu, MenuItem, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const AdvanceCoursesMain = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRowId, setCurrentRowId] = useState(null);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [loading, setLoading] = useState(false);




  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };






  return (
    <Box>
   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: '550',
                fontSize: '2rem',
              }}
            >
            Advance Courses
            </Typography>

            <Button variant='outlined' >
              + Add Course
            </Button>
          </Box>

          <br />

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer component={Paper} sx={{ padding: '1rem 1rem', boxShadow: '10px 0px 20px 1px rgba(0, 0, 0, 0.1)' }}>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Course Duration</TableCell>
                    <TableCell>Lecture Duration</TableCell>
                    <TableCell>Course Fee</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row' sx={{ color: 'grey' }}>
                        name
                      </TableCell>
                      <TableCell sx={{ color: 'grey' }}>Duration</TableCell>
                      <TableCell sx={{ color: 'grey' }}>3 hours</TableCell>
                      <TableCell sx={{ color: 'grey' }}>$ 100</TableCell>
                      <TableCell>
                        <IconButton onClick={(event) => handleMenuClick(event, row._id)}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem >View</MenuItem>
                          <MenuItem >Delete</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}

    </Box>
  );
};

export default AdvanceCoursesMain;
