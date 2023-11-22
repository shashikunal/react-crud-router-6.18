import { useState, useEffect } from "react";
import Spinner from "../../pages/spinner/Spinner";
import Course from "./Course";
import courseServices from "../../services/CourseService";
import SearchCourses from "../searchFilter/SearchCourses";

// let obj = {
//   courses: {
//     frontend: {
//       libraries: {
//         meta: {
//           popular: {
//             title: "react",
//           },
//         },
//       },
//     },
//   },
// };

// let accessData = obj?.courses?.libraries?.meta?.popular?.title;
// console.log(accessData);

const AllCourses = () => {
  let [state, setState] = useState(null);
  let [searchTerm, setSearchTerm] = useState("");
  let fetchCourses = async () => {
    let data = await courseServices.fetchService();
    setState(data);
  };

  let handleSearch = term => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  let FilteredCourse = state
    ?.filter(val => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map(course => <Course key={course.id} {...course} />);
  console.log(FilteredCourse);

  return (
    <>
      <SearchCourses handleSearch={handleSearch} />
      <h2>ALl Courses</h2>
      <div className="courses">
        {state === null ? <Spinner /> : FilteredCourse}
      </div>
    </>
  );
};

export default AllCourses;
