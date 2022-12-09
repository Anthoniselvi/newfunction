import React, { useContext } from "react";
import { EntryContext } from "../Context/EntryContext";

export default function AddEntry() {
  const {
    name,
    setName,
    city,
    setCity,
    amount,
    setAmount,
    gift,
    setGift,
    handleSubmitEntry,
  } = useContext(EntryContext);
  return (
    <div className="entry-container">
      <h1>Add New Entry</h1>
      <form onSubmit={handleSubmitEntry}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Person Name"
        />
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
        />
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount in Rs."
        />
        <input
          type="number"
          name="gift"
          value={gift}
          onChange={(e) => setGift(e.target.value)}
          placeholder="Enter No. of Gifts"
        />

        <button>Add New Entry</button>
      </form>
    </div>
  );
}
