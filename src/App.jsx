import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./pages/Layouts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateCourse from "./components/courses/CreateCourse";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";
import AllUsers from "./components/users/Allusers";
import SingleUser from "./components/users/SingleUser";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

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
            element: (
              <PrivateRoute>
                <CreateCourse />
              </PrivateRoute>
            ),
          },
          {
            path: ":id",
            element: (
              <PrivateRoute>
                <CourseDetails />
              </PrivateRoute>
            ),
          },
          {
            path: "edit/:id",
            element: (
              <PrivateRoute>
                <EditCourse />
              </PrivateRoute>
            ),
          },
          {
            path: "users",
            element: (
              <PrivateRoute>
                <AllUsers />
              </PrivateRoute>
            ),
          },
          {
            path: "/users/:id",
            element: (
              <PrivateRoute>
                <SingleUser />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
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
