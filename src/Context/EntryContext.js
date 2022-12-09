import { createContext, useState, useEffect } from "react";

// import Dashboard from "./Components/Dashboard";

export const EntryContext = createContext(null);

const getDatafromEntry = () => {
  const data = localStorage.getItem("entries");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export const EntryContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [gift, setGift] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  //   const [totalAmt, setTotalAmt] = useState(0);
  //   const [totalGift, setTotalGift] = useState(0);
  //   const [history, setHistory] = useState([]);
  const [entries, SetEntries] = useState(getDatafromEntry());

  const handleSubmitEntry = (e) => {
    console.log(name, amount, gift);
    // let intAmount = parseInt(amount);
    e.preventDefault();
    let entry = {
      name,
      city,
      amount,
      gift,
    };
    SetEntries([...entries, entry]);
    setName("");
    setCity("");
    setAmount("");
    setGift("");
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <EntryContext.Provider
      value={{ entries, handleSubmitEntry, name, amount, city, gift }}
    >
      {children}
    </EntryContext.Provider>
  );
};
