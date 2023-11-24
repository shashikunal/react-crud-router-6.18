import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from "../../context/AuthContext";

const Register = () => {
  let { signup } = useContext(AuthContextApi);
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    isLoading: false,
  });

  let { name, email, password, avatar, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, email, password, avatar };
      signup(payload);
      toast.success("successfully registered");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              placeholder="enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainer">email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="enter email"
            />
          </div>

          <div className="form-group desc_block">
            <label htmlFor="description">password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group at">
            <label htmlFor="createdAt">Avatar url</label>
            <input
              type="url"
              name="avatar"
              value={avatar}
              onChange={handleChange}
              required
              placeholder="enter avatar url"
            />
          </div>

          <div className="form-group1">
            <button>{isLoading ? "loading" : "Register"}</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Register;
