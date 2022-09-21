import { useState } from "react";

//pass the function deleteUser as a prop

const DeleteUser = ({ deleteUser }) => {
  //stores the userID that will be deleted
  const [deleteId, setDeleteId] = useState("");

  //part b from users.jsx
  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser(deleteId);
  };
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
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteUser;
