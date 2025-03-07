import useFetchUsers from "./useFetchUsers";
import UserCard from "./UserCard";
import "./App.css";

const App = () => {
  const { users, loading } = useFetchUsers("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios</h1>
      {loading ? (
        <p className="loading">Cargando usuarios...</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <UserCard key={user.id} name={user.name} company={user.company.bs} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;