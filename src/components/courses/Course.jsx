/* eslint-disable react/prop-types */
const Course = ({ title, trainer }) => {
  return (
    <div className="list">
      <h1>{title}</h1>
      <p>{trainer}</p>
    </div>
  );
};

export default Course;
