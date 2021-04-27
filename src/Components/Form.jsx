import "./Form.css";
import Option from "./Option";

const Form = () => {

  return (
    <div className="form">
      <Option bill = "$100 Bills" />
      <Option bill = "$50 Bills" />
      <Option bill = "$20 Bills" />
      <Option bill = "$10 Bills" />
      <Option bill = "$5 Bills" />
      <Option bill = "$1 Bills" />
    </div>
  )
}

export default Form;