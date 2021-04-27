const Option = (props) => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <select>
        {nums.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Option;
