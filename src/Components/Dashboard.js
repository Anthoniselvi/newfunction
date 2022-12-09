import React, { useContext } from "react";
import { EventContext } from "../Context/EventContext";
import { EntryContext } from "../Context/EntryContext";

export default function Dashboard() {
  const { eventinputs } = useContext(EventContext);
  const { totalAmt, gift } = useContext(EntryContext);
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div>
        {eventinputs.map((eventinput) => (
          <div key={eventinput}>
            <h3>{eventinput.funcName}</h3>
          </div>
        ))}
        <p>Total Amount - {totalAmt}</p>
        <p>No.of.Gifts - {gift}</p>
      </div>
    </div>
  );
}
