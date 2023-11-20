import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../pages/spinner/Spinner";
import Course from "./Course";

const AllCourses = () => {
  let [state, setState] = useState(null);
  let fetchCourses = async () => {
    let { data } = await axios.get("http://localhost:5000/courses");
    setState(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <h2>ALl Courses</h2>
      <div className="courses">
        {state === null ? (
          <Spinner />
        ) : (
          state.map(course => <Course key={course.id} {...course} />)
        )}
      </div>
    </>
  );
};

export default AllCourses;
