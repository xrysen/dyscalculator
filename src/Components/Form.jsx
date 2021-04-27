import "./Form.css";
import Bill from "./Bill";

const Form = () => {
  return (
    <div className="form">
      <h1>What's in Your Wallet?</h1>
      <table>
        <tr>
          <th>Bill</th>
          <th>Amount</th>
        </tr>
        <Bill bill = "$100 Bills" />
        <Bill bill = "$50 Bills" />
        <Bill bill = "$20 Bills" />
        <Bill bill = "$10 Bills" />
        <Bill bill = "$5 Bills" />
        <Bill bill = "$1 Bills" />
      </table>
    </div>
  );
};

export default Form;
