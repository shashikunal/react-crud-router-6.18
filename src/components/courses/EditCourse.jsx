import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    updatedAt: "",
    isLoading: false,
  });
  let { title, trainer, isLoading, description, createdAt, updatedAt } = state;

  useEffect(() => {
    let fetchCourse = async () => {
      let { data } = await axios.get(`http://localhost:5000/courses/${id}`);
      setState(data);
    };
    fetchCourse();
  }, [id]);
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { title, trainer, description, updatedAt };

      await axios.put(`http://localhost:5000/courses/${id}`, payload);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>Update Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              required
              placeholder="enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainer">trainer</label>
            <input
              type="text"
              name="trainer"
              value={trainer}
              onChange={handleChange}
              required
              placeholder="enter trainer"
            />
          </div>

          <div className="form-group desc_block">
            <label htmlFor="description">description</label>
            <textarea
              name="description"
              id="description"
              cols="10"
              rows="2"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group at">
            <label htmlFor="createdAt">Course Create at</label>
            <input
              type="date"
              name="createdAt"
              value={createdAt}
              onChange={handleChange}
              required
              placeholder="enter date"
            />
          </div>

          <div className="form-group1">
            <button>{isLoading ? "loading" : "update course"}</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default EditCourse;
