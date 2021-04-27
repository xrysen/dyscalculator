import Option from "./Option";

const Bill = (props) => {
  return (
    <tr>
      <td>{props.bill}</td>
      <td>
        <Option />
      </td>
    </tr>
  );
};

export default Bill;
