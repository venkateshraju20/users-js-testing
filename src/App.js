import UserForm from "./UserForm";
import { useState } from "react";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const onAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </>
  );
}

export default App;
