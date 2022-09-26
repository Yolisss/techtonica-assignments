import { useState } from "react";

//pass the function deleteUser as a prop

//from the users component, we're passing onDeleteUsers as a prop
//by passing the function we allow it to have delete function functionality
const DeleteUser = ({ onDeleteUsers }) => {
  //stores the userID that will be deleted
  const [id, setId] = useState("");

  //part b from users.jsx
  //deleteUserCallback(deleteId) grabbing the new value

  //in the handleDelete, we are claling the onDeleteUsers
  //which will perform the user deletion
  //calling onDeleteUsers and passing id
  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteUsers(id);
    setId("");
  };

  //# means going back to the current page
  //form is going to cause to reload but also pass info
  // to exisiting page with whatever you want to do
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleDelete}>
        <fieldset>
          <label>User ID</label>
          <input
            type="number"
            min="1"
            id="delete-user-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

//this is allowing for other files to import deleteUser
export default DeleteUser;
