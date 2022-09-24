import { useState } from "react";

//pass the function deleteUser as a prop

//from the users component, we're passing onDeleteUsers as a prop
//by passing the function we allow it to have delete function functionality
const DeleteEvent = ({ onDeleteEvents }) => {
  //stores the userID that will be deleted
  const [deleteEventId, setDeleteEventId] = useState("");

  //part b from users.jsx
  //deleteUserCallback(deleteId) grabbing the new value

  //in the handleDelete, we are claling the onDeleteUsers
  //which will perform the user deletion
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteEvents(deleteEventId);
    setDeleteEventId("");
  };

  //# means going back to the current page
  //form is going to cause to reload but also pass info
  // to exisiting page with whatever you want to do
  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#" onSubmit={handleSubmit}>
        <fieldset>
          <label>Event ID</label>
          <input
            type="text"
            min="1"
            id="delete-event-id"
            value={deleteEventId}
            onChange={(e) => setDeleteEventId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteEvent;
