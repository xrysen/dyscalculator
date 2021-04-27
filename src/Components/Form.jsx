import "./Form.css";
import { useEffect, useState } from "react";
import Option from "./Option";

const Form = () => {
  const [total, setTotal] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);

  const handleBillChange = (bill, e) => {
    switch (bill) {
      case 1:
        setOne(1 * e.target.value);
        break;
      case 5:
        setFive(5 * e.target.value);
        break;

      case 10:
        setTen(10 * e.target.value);
        break;

      case 20:
        setTwenty(20 * e.target.value);
        break;

      case 50:
        setFifty(50 * e.target.value);
        break;

      case 100:
        setHundred(100 * e.target.value);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    setTotal(one + five + ten + twenty + fifty + hundred)
  }, [one, five, ten, twenty, fifty, hundred]);

  return (
    <div className="form">
      <h1>What's in Your Wallet?</h1>
      <table>
        <thead>
          <tr>
            <th>Bill</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$100 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange(100, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$50 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange(50, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$20 Bills</td>
            <td>
              <select onChange={(e)=> handleBillChange(20, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$10 Bills</td>
            <td>
              <select onChange={(e)=> handleBillChange(10, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$5 Bills</td>
            <td>
              <select onChange={(e)=> handleBillChange(5, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$1 Bills</td>
            <td>
              <select onChange={(e)=> handleBillChange(1, e)}>
                <Option />
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Form;
