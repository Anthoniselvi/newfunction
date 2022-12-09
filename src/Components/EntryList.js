import React, { useContext } from "react";
import { EntryContext } from "../Context/EntryContext";
import "../App.css";

export default function EntryList() {
  const { entries } = useContext(EntryContext);
  return (
    <div className="entrylist-container">
      <h1>Entry List</h1>
      <table>
        <tr>
          <td>Person Name</td>
          <td>Amount Recd</td>
          <td>No. of Gift</td>
        </tr>
        {entries.map((entry) => (
          <tr key={entry}>
            <td>{entry.name}</td>
            <td>{entry.amount}</td>
            <td>{entry.gift}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

// const [first, setfirst] = useState("");
// const [sum, setSum] = useState(0);

// useEffect(() => {
//  let sumInput =0;
//  for(var i =0; i<first.length; i++) {
//    if(!isNaN(first[i])) sumInput = sumInput + parseInt(first[i])
//  }
//  setSum(sumInput )
// }, [first])

//   return (
//     <>
//     <label>Sum of inputs:  <input type="text" value= onChange={(e) => setfirst(e.target.value)} />
//     </>
//   );
