import { useState, useEffect } from "react";
import DeleteUser from "./DeleteUser";

const Users = () => {
  const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
  const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
  const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

  //useState for users
  const [users, setUsers] = useState([marlin, nemo, dory]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  //useState for our working components

  //...users is calling all the prev users in list
  //newUser is the new data

  // client/src/components/Users.jsx
  const getUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Add new user
  const handleDeleteUsers = async (e) => {
    e.preventDefault();
    const newUser = { id: id, name: name, email: email };

    const rawResponse = await fetch("http://localhost:4000/users", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const content = await rawResponse.json();

    setUsers([...users, content]);
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const newUser = { id: "", name: "", email: "" };

    const rawResponse = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const content = await rawResponse.json();

    setUsers([...users, content]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: id, name: name, email: email };

    //setUse contains list of users, newUser contains new user that's inputted in the list
    setUsers([...users, newUser]);
    //reset after submit
    setName("");
    setId("");
    setEmail("");
  };

  //part a from deleteUser.jsx
  //filter to exclude delete, setUsers called to use new list
  const deleteUser = (deleteId) => {
    const filterUsers = users.filter((i) => i.id !== deleteId);
    //updates the user list
    setUsers(filterUsers);
  };

  return (
    <section className="user-management">
      <h2>User Management</h2>
      <ul id="users-list">
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, Email: {user.email}
            </li>
          );
        })}
      </ul>
      <div>
        <h3>Add User</h3>
        <form id="add-user" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name:</label>
            <input
              type="text"
              id="add-user-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>User ID:</label>
            <input
              type="number"
              id="add-user-id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="text"
              id="add-user-email"
              value={email}
              //whenever we pass an event, we are pulling that value from it
              //target:{value} is retrieving value of variable input by client
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" onSubmit={handleSubmit} />
        </form>
      </div>
      {/* //DeleteUser COmponent added to Users Component. 
      //deleteUser would be the
      props in this situation to use the callback function */}
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};
export default Users;
