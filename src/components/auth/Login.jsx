import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from "../../context/AuthContext";

const Login = () => {
  let { login } = useContext(AuthContextApi);
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });

  let { email, password, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { email, password };
      await login(payload);
      navigate("/users");
      toast.success("successfully logged in");
    } catch (error) {
      toast.error(error.response.statusText);
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group desc_block">
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

          <div className="form-group1">
            <button>{isLoading ? "loading" : "Login"}</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Login;
