import react, { createContext, useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import AddFunctionName from "./Components/AddFunctionName";
import AddEntry from "./Components/AddEntry";
import EntryList from "./Components/EntryList";
import { EventContext } from "./Context/EventContext";
import { EntryContext } from "./Context/EntryContext";

function App() {
  return (
    <div className="App">
      <EventContext.Provider>
        <EntryContext.Provider>
          <Dashboard />
          <AddFunctionName />
          <AddEntry />
          <EntryList />
        </EntryContext.Provider>
      </EventContext.Provider>
    </div>
  );
}

export default App;
