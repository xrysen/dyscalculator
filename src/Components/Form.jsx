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
  });

  const handleBillChange = (bill, e) => {
    switch (bill) {
      case 1:
        setBills({
          ...bills,
          one: 1 * e.target.value,
        });
        break;
      case 5:
        setBills({
          ...bills,
          five: 5 * e.target.value,
        });
        break;

      case 10:
        setBills({
          ...bills,
          ten: 10 * e.target.value,
        });
        break;

      case 20:
        setBills({ ...bills, twenty: 20 * e.target.value });
        break;

      case 50:
        setBills({ ...bills, fifty: 50 * e.target.value });
        break;

      case 100:
        setBills({ ...bills, hundred: 100 * e.target.value });
        break;

      default:
        break;
    }
  };

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
              <select onChange={(e) => handleBillChange(20, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$10 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange(10, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$5 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange(5, e)}>
                <Option />
              </select>
            </td>
          </tr>
          <tr>
            <td>$1 Bills</td>
            <td>
              <select onChange={(e) => handleBillChange(1, e)}>
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
