import { useState, useEffect } from "react";
//has a callback; executes everything you want to happen
//and dependency arr: executes cb => trigger a rerender
//difference is when it'll rerender
import DeleteUser from "./DeleteUser";

//mock users
const Users = () => {
  const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
  const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
  const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

  //useState for users
  const [users, setUsers] = useState([marlin, nemo, dory]);

  //useState for our working components
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  //useState for our working components

  //...users is calling all the prev users in list
  //newUser is the new data

  // client/src/components/Users.jsx
  //fetching from the server
  const getUsers = async () => {
    ///localhost:4000/users contains
    // "id:1, name: "crush", email: "crush@gmail.com"
    const response = await fetch("http://localhost:4000/users");
    const user = await response.json();
    setUsers(user);
  };

  //empty dependency arr, will only run on time after the first render
  //cannot be used inside of a function
  //direct child to the component
  //once react is being rendered on the screen, function will get called
  //[] will only be run once

  //useEffect will have function getUsers be called once when this component
  //mounts (when its first present in the app)
  useEffect(() => {
    getUsers();
  }, []);

  // Add new user
  // Add new user
  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = { id, name, email };

    //creating something new inside of express
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        //"i want server to respond in json"; headers
        Accept: "application/json",
        //"the body of this req is also json"; headers
        "Content-Type": "application/json",
      },
      //converting object to string in json format; payload
      body: JSON.stringify(newUser),
    });
    //taking the response from resp tab;
    //turning it back into an js object from json
    //this is found in response tab of the network req
    const content = await response.json();

    //the response content being added to users list
    //name, email and id will then reset
    setUsers([...users, content]);
    setName("");
    setEmail("");
    setId("");
  };

  //created a variable and assigned it to a function

  //sending a delete req for that userID to the server (local host)
  //the URL contains the userId
  const handleDeleteUsers = async (userId) => {
    const response = await fetch(`http://localhost:4000/users/${userId}`, {
      method: "DELETE",
    });
    await response.json();

    //"basically keep everything except for the ID I'm trying to delete"
    //originally the delete user section was not updating list of users on the page
    //this is bc in the delete user form, the deleteID was a string line 32
    //whereas the User.ID is an integer; line 37
    //which caused the comparison to fail
    //parseInt allows us to convert from string to integer
    console.log(typeof userId);
    const deleteUsers = users.filter((i) => i.id !== parseInt(userId));
    console.log(deleteUsers);

    //updating list of users
    setUsers(deleteUsers);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newUser = { id: id, name: name, email: email };

  //   setUsers([...users, newUser]);

  //   //reset after submit
  //   setName("");
  //   setId("");
  //   setEmail("");
  // };

  //part a from deleteUser.jsx
  //filter to exclude delete, setUsers called to use new list
  // const deleteUser = (deleteId) => {
  //   const newUsers = users.filter((i) => i.id !== deleteId);
  //   //updates the user list
  //   setUsers(newUsers);
  // };

  //for each user in the users list, return the html for that user
  //users from line 14, list of objects
  //user is an object ex. user.name: name is the property of that object
  //onClick method will call handleDeleteUsers for the id of the current user
  return (
    <section className="user-management">
      <h2>User Management</h2>
      <ul id="users-list">
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, Id: {user.id}, Email: {user.email}
            </li>
          );
        })}
      </ul>
      <div>
        <h3>Add User</h3>
        <form id="add-user" onSubmit={handleAddUser}>
          <fieldset>
            <label>Name:</label>
            <input
              type="text"
              id="add-user-name"
              //the value refers to the name State (line 17)
              value={name}
              //onChange will call setName and will update name state
              //whenever we change the value inside the text box
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
          {/* //value shows what gets displayed on that button */}
          <input type="submit" value="Add" />
        </form>
      </div>
      {/* //DeleteUser COmponent added to Users Component. 
      //deleteUser would be the
      props in this situation to use the callback function */}
      {/* //passing handleDeleteUsers function to the DeleteUser component */}
      {/* //this sets up where DeleteUser is a child component of the Users component */}
      {/* {/* this is pass handleDeleteUsers as a prop  } */}
      <DeleteUser onDeleteUsers={handleDeleteUsers} />
    </section>
  );
};

export default Users;
