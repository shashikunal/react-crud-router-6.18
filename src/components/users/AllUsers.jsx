import useFetchUser from "../../hooks/UserHook";
import Spinner from "../../pages/spinner/Spinner";
import { Link } from "react-router-dom";

const AllUsers = () => {
  let {
    users: { users, isLoading },
  } = useFetchUser();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="userBlock">
          <article className="container">
            <header>
              <h2>Users</h2>
            </header>

            <>
              <table>
                <thead>
                  <tr>
                    <th>photo</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map(user => (
                    <tr key={user.id}>
                      <td>
                        <img src={user.avatar} alt={user.name} />
                      </td>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <Link to={`/users/${user.id}`} className="nav-link">
                          view more
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          </article>
        </section>
      )}
    </>
  );
};

export default AllUsers;
