import { Button, Card, Typography, CircularProgress, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSingleCourse } from "../../../../store/actions/courseActions";
import EditBeginnerCourse from "./EditBeginnerCourse";

const ViewBeginnerCourse = ({ courseId }) => {
  const base = "https://wv9pfwh9-4545.inc1.devtunnels.ms";

  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await dispatch(getSingleCourse(courseId));
        console.log(res.data.data, "Course data fetched");
        setCourseData(res.data.data);
      } catch (err) {
        console.error("Failed to fetch course:", err);
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if an error occurs
      }
    };

    fetchData();
  }, [dispatch, courseId]); // Include courseId in the dependency array

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBackClick = () => {
    setIsEditing(false);
    // Add logic to navigate back to the courses list or handle the back action
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {isEditing ? (
        <>
          <Button variant='outlined' onClick={handleBackClick} sx={{ marginBottom: '1rem' }}>
            &lt; Back to Courses
          </Button>
          <EditBeginnerCourse/>
        </>
      ) : (
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
            onClick={handleEditClick}
          >
            Edit
          </Button>
        </Card>
      )}
    </>
  );
};

export default ViewBeginnerCourse;
