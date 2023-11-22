import { Link, useLocation, useNavigate } from "react-router-dom";
import Moment from "moment";
import axios from "axios";

/* eslint-disable react/prop-types */
const CourseDetails = () => {
  let navigate = useNavigate();

  let {
    state: { id, title, trainer, description, createdAt },
  } = useLocation();

  let deleteCourse = async id => {
    if (window.confirm() === true) {
      await axios.delete(`http://localhost:5000/courses/${id}`);
      window.location.assign("/"); //force refresh to clean cache in the browser
    } else {
      navigate("/");
    }
  };

  return (
    <div className="course_details">
      <header>
        <Link to={`/edit/${id}`} className="edit btn-help">
          edit
        </Link>
        <Link
          to="/"
          className="delete btn-help"
          onClick={() => deleteCourse(id)}
        >
          delete
        </Link>
        <Link to="/" className="back btn-help">
          back
        </Link>
        <h2>{title}</h2>
      </header>
      <main>
        <p>
          <span>Trainer : </span>
          <span>{trainer}</span>
        </p>
        <p>{description}</p>
      </main>
      <footer>
        <span className="date_create">Course Created At : </span>
        <span>
          <strong>{Moment(createdAt).fromNow()}</strong>
        </span>
      </footer>
    </div>
  );
};

export default CourseDetails;
