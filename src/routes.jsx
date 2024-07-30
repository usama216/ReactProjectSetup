import { useNavigate, useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
import Password_Confirmation from "./Pages/Authentication_Page/Components/Password_Confirmation";
import Change_Password from "./Pages/Authentication_Page/Components/Change_Password";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminMain from "../src/Admin/AdminMain";
import Main from "./Pages/Authentication_Page/Main";

import SingleProduct from "./Pages/ShopPage/SingleProduct";
import ComingSoon from "./components/ComingSoon";
import AboutUs from "./Pages/AboutUS/AboutUs";
import ContactUs from "./Pages/ContactUs";
import AdvanceCourseMain from "./Pages/AdvanceCoursePage/AdvanceCourseMain";
import BegginerCoursesMain from "./Pages/BegginerCoursesPage/BegginerCoursesMain";
import AdvanceCoursePriceMain from "./Pages/AdvanceCoursePrice/AdvanceCoursePriceMain";
import BegginerCoursePriceMain from "./Pages/BegginerCoursePrice/BegginerCoursePriceMain";
import BlogsPageMain from "./Pages/BlogsPage/BlogsPageMain";
import BlogDetailPage from "./Pages/BlogsPage/BlogDetailPage";
import FAQMain from "./Pages/FAQPage/FAQMain";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Authentication_Page/SignIn/SignIn";
import ForgetPassword from "./Pages/Authentication_Page/ForgetPassword/ForgetPassword";
import CreatePassword from "./Pages/Authentication_Page/CreatePassword/CreatePassword";
import OTPConfirmation from "./Pages/Authentication_Page/Components/OTPConfirmation";
import SetNewPassword from "./Pages/Authentication_Page/Components/SetNewPassword";
import StudentMain from "./Student/StudentMain";
export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/about-us",
      element: <AboutUs />,
    },

    {
      path: "/contact-us",
      element: <ContactUs />,
    },

    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },

    {
      path: "/otp-verification",
      element: <OTPConfirmation />,
    },

    {
      path: "/set-password",
      element: <SetNewPassword />,
    },
    {
      path: "/advanced-course",
      element: <AdvanceCourseMain />,
    },

    {
      path: "/beginner-course",
      element: <BegginerCoursesMain />,
    },

    {
      path: "/advance-course-price",
      element: <AdvanceCoursePriceMain />,
    },

    {
      path: "/begginer-course-price",
      element: <BegginerCoursePriceMain />,
    },

    {
      path: "/blogs",
      element: <BlogsPageMain />,
    },

    {
      path: "/blog-detail",
      element: <BlogDetailPage />,
    },

    {
      path: "/faqs",
      element: <FAQMain />,
    },

    {
      path: "/admin-dashboard",
      element: <AdminMain />,
    },

    {
      path: "/student-dashboard",
      element: <StudentMain />,
    },



  ]);
  return element;
}
