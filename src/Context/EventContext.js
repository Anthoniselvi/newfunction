import { createContext, useState, useEffect } from "react";

// import Dashboard from "./Components/Dashboard";

export const EventContext = createContext(null);

const getDatafromEvents = () => {
  const details = localStorage.getItem("eventinputs");
  if (details) {
    return JSON.parse(details);
  } else {
    return [];
  }
};
export const EventContextProvider = ({ children }) => {
  const [funcName, setFuncName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  //   const [eventinput, setEventInput] = useState({});
  const [eventinputs, setEventInputs] = useState(getDatafromEvents());

  const handleSubmitEvent = (e) => {
    console.log(funcName, place, date);
    e.preventDefault();
    let eventinput = {
      funcName,
      place,
      date,
    };
    setEventInputs([...eventinputs, eventinput]);
    setFuncName("");
    setPlace("");
    setDate("");
  };

  useEffect(() => {
    localStorage.setItem("eventinputs", JSON.stringify(eventinputs));
  }, [eventinputs]);

  return (
    <EventContext.Provider value={{ eventinputs, handleSubmitEvent }}>
      {children}
    </EventContext.Provider>
  );
};
