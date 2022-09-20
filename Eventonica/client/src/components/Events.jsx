import { useReducer } from "react";
import { useState } from "react";

//mock events
const event1 = {
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
};

const event3 = {
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questions",
  category: "Education",
};

const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched");
      //it updates the name to the input value
      return { ...state, name: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    case "editDate":
      return { ...state, date: action.payload };

    case "editID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

const Events = () => {
  //state for events
  const [events, setEvents] = useState([event1, event2, event3]);

  //initialistate of the form will be empty
  const initialState = {
    id: "",
    name: "",
    date: null,
    description: "",
    category: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    //updates list with new event
    setEvents([...events, state]);
  };

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          {/* <li>...</li> */}
          {events.map((event, index) => {
            return (
              <li key={index}>
                ID:{event.id}, Name: {event.name}, Date:{event.date},
                Description:{event.description} , Category: {event.category},
              </li>
            );
          })}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <br></br>
            <label>Name: </label>
            <br></br>
            <input
              type="text"
              id="add-event-name"
              placeholder="Puppy Cat"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>ID: </label>
            <br></br>
            <input
              type="text"
              id="add-event-id"
              placeholder="1"
              value={state.id}
              onChange={(e) =>
                dispatch({
                  type: "editID",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Date: </label>
            <br></br>
            <input
              type="text"
              id="add-event-date"
              placeholder="02/20/2022"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Description: </label>
            <br></br>
            <input
              type="text"
              id="add-event-description"
              placeholder="Virtual corgi meetup"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Category: </label>
            <br></br>
            <input
              type="text"
              id="add-event-category"
              placeholder="Virtual corgi meetup"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};
export default Events;
