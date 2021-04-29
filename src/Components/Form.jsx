import "./Form.css";
import { useEffect, useState } from "react";
import Option from "./Option";

const Form = () => {
  const [total, setTotal] = useState(0);
  const [bills, setBills] = useState({
    hundred: 0,
    fifty: 0,
    twenty: 0,
    ten: 0,
    five: 0,
    one: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
    loonie: 0,
    toonie: 0
  });

  const handleBillChange = (bill, multiplyer, e) => {
    bills[bill] = multiplyer * e.target.value;
    setBills({
      ...bills
    });
  }

  

  useEffect(() => {
    let sum = 0;
    for (const key in bills) {
      sum += bills[key];
    }
    setTotal(sum);
  }, [bills]);

  return (
    <div className="form">
      <h1>What's in Your Wallet?</h1>
      <table>
        <thead>
          <tr>
            <th>Bill</th>
            <th>Amount</th>
            <th>Change</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$100 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange("hundred", 100, e)}>
                <Option />
              </select>
            </td>
            <td>Quarters</td>
            <td>
              <select onChange={(e) => handleBillChange("quarter", 0.25, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$50 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange("fifty", 50, e)}>
                <Option />
              </select>
            </td>
            <td>Dimes</td>
            <td>
              <select onChange={(e) => handleBillChange("dime", 0.10, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$20 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange("twenty", 20, e)}>
                <Option />
              </select>
            </td>
            <td>Nickels</td>
            <td>
              <select onChange={(e) => handleBillChange("nickel", 0.05, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$10 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange("ten", 10, e)}>
                <Option />
              </select>
            </td>
            <td>Pennies</td>
            <td>
              <select onChange={(e) => handleBillChange("penny", 0.01, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$5 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange("five", 5, e)}>
                <Option />
              </select>
            </td>
            <td>Toonies (Canada)</td>
            <td>
              <select onChange={(e) => handleBillChange("tonnie", 2, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$1 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange("one", 1, e)}>
                <Option />
              </select>
            </td>
            <td>Loonies (Canada)</td>
            <td>
              <select onChange={(e) => handleBillChange("loonie", 1, e)}>
                <Option />
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Form;
