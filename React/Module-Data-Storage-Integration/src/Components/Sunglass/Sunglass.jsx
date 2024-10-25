// import add from "../../Utils/Calculate"; // ---> First way to import
import {
  add,
  divideTheFirstNumberByTheSecondNumber as division, // <--- here, we are renaming the function with the alias division by using the as keyword
  multiply,
} from "../../Utils/Calculate"; // <--- Second way to import
import Watch from "../Watch/Watch";

const Sunglass = () => {
  const first = 5 ,second = 6;
  const sum = add(first, second); //  <--- Second way to import
  const mul = multiply(first, second); //  <--- Second way
  const divide = division(first, second); //  <--- Second way
  console.log(sum, mul, divide);
  // const sum = add(first, second); first way to import
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
