import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch data from a REST API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // parse JSON
      .then((data) => setUsers(data)) // update state with data
      .catch((error) => console.error(error)); // handle errors
  }, []); // run only once on mount

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;