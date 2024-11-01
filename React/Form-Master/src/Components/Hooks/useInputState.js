import { useState } from "react";
const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  // Way 01
  //   return [value, handleChange];
  // Way 02
  return { value, onChange: handleChange };
};

export default useInputState;
