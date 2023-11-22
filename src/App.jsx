import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./pages/Layouts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateCourse from "./components/courses/CreateCourse";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <AllCourses />,
          },
          {
            path: "create-course",
            element: <CreateCourse />,
          },
          {
            path: ":id",
            element: <CourseDetails />,
          },
          {
            path: "edit/:id",
            element: <EditCourse />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
