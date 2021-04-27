const Option = (props) => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
        {nums.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </>
  );
};

export default Option;
