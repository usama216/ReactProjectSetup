import { Button, Card, Typography, CircularProgress, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  getSingleCourse } from "../../../../store/actions/courseActions";

const ViewAdvanceCourse = ({courseId}) => {
  const base = "https://wv9pfwh9-4545.inc1.devtunnels.ms";

  console.log(courseId, 'dddddddddddddddddddd')
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const res = await dispatch(getSingleCourse(courseId));
        console.log(res.data.data, "hahahahhaaa");
        setCourseData(res.data.data);
      } catch (err) {
        console.error("Failed to fetch advance courses:", err);
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if an error occurs
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Card sx={{ padding: "1rem", marginBottom: "1rem" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Course Name
          </Typography>
          <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
            {courseData.title}
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Course Overview
          </Typography>
          <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
            {courseData.overview}
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Prerequisites
          </Typography>
          <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
            {courseData.prerequisites}
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Topics Covered
          </Typography>

          {courseData.topics.map((topic, index) => (
            <Typography key={index} sx={{ marginTop: "0.2rem", color: "grey" }}>
              {topic}
            </Typography>
          ))}

          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Course Fee
          </Typography>
          <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
            ${courseData.price}
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Course Duration
          </Typography>
          <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
            {courseData.courseDuration} weeks
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Lecture Duration
          </Typography>
          <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
            {courseData.lectureDuration} hour
          </Typography>

          <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
            Image
          </Typography>

          <img
            src={`${base}${courseData.image.replace(/ /g, "%20")}`}
            alt={courseData.title}
            width={"20%"}
          />

          <br />
          <Button
            variant="contained"
            sx={{ borderRadius: "0px", width: "30%" }}
          >
            Edit
          </Button>
        </Card>
    </>
  );
};

export default ViewAdvanceCourse;
