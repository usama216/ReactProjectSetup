import React from 'react'
import "./Hero_card.css"
import Hero_card_box from './Hero_card_box';
import CountUp from 'react-countup';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { TiWorldOutline } from 'react-icons/ti';
import { FaRegSmile } from 'react-icons/fa';
import { PiVideoLight } from 'react-icons/pi';


function Hero_card() {
  const theme = useTheme()
  return (
    <>
    <section className='hero-card-section'>
    <Grid container spacing={5}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                padding: "2rem 3rem",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <TiWorldOutline style={{ color: "white", fontSize: "4rem" }} />

                <Typography sx={{ fontSize: "2rem" }}>
                  {" "}
                  <CountUp style={{ fontSize: "2rem" }} start={0} end={45} />+
                </Typography>

                <Typography>Total Countries</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                padding: "2.1rem 3rem",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >

              <Box>
                <img src='/peopleIcon.svg' alt='icon' width='100%'/>
              </Box>

                <Typography sx={{ fontSize: "2rem" }}>
                  {" "}
                  <CountUp style={{ fontSize: "2rem" }} start={0} end={1200} />+
                </Typography>

                <Typography>Total Students</Typography>
              </Box>
            </Box>
          </Grid>



          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                padding: "2rem 3rem",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <FaRegSmile style={{ color: "white", fontSize: "4rem" }} />

                <Typography sx={{ fontSize: "2rem" }}>
                  {" "}
                  <CountUp style={{ fontSize: "2rem" }} start={0} end={1000} />+
                </Typography>

                <Typography>Happy Students</Typography>
              </Box>
            </Box>
          </Grid>




          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                padding: "2rem 3rem",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <PiVideoLight style={{ color: "white", fontSize: "4rem" }} />

                <Typography sx={{ fontSize: "2rem" }}>
                  {" "}
                  <CountUp style={{ fontSize: "2rem" }} start={0} end={2500} />+
                </Typography>

                <Typography>Online Clsasses</Typography>
              </Box>
            </Box>
          </Grid>



        </Grid>


    </section>
    </>
  )
}

export default Hero_card;



