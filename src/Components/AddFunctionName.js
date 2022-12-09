import React, { useContext } from "react";
import { EventContext } from "../Context/EventContext";

export default function AddFunctionName() {
  const {
    funcName,
    setFuncName,
    place,
    setPlace,
    date,
    setDate,
    handleSubmitEvent,
  } = useContext(EventContext);
  return (
    <div className="function-container">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmitEvent}>
        <input
          type="text"
          name="funcName"
          value={funcName}
          onChange={(e) => setFuncName(e.target.value)}
        />
        <input
          type="text"
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Add Event</button>
      </form>
    </div>
  );
}
