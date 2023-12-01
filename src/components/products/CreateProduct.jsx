import { Form } from "react-router-dom";

const CreateProduct = () => {
  return (
    <div>
      <h1>Create User</h1>
      <Form action="/create-product" method="post">
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="price">email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="description">password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form-group">
          <label htmlFor="avatar">avatar</label>
          <input type="text" name="avatar" />
        </div>
        <div className="form-group">
          <button>submit</button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProduct;
