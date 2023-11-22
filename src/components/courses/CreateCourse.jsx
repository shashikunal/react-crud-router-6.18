import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCourse = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    createdAt: "",
    isLoading: false,
  });
  let { title, trainer, isLoading, description, createdAt, updatedAt } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { title, trainer, description, createdAt };

      await axios.post("http://localhost:5000/courses", payload);

      //BUILT IN WINDOW FETCH API WITH POST
      // await window.fetch("http://localhost:5000/courses", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(payload),
      // });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>Create Course</h1>
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
            <button>{isLoading ? "loading" : "Create course"}</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default CreateCourse;
