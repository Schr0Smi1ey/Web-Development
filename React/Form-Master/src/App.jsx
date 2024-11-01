import "./App.css";
import CustomHookForm from "./Components/CustomHookForm/CustomHookForm";
import RefForm from "./Components/RefForm/RefForm";
import ReUseableForm from "./Components/ReUsableForm/ReUseableForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";

function App() {
  // const handleSignUpSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  // };

  // const handleUpdateSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  // };

  return (
    <>
      <h1>Form Master</h1>
      <SimpleForm></SimpleForm>
      <StatefulForm></StatefulForm>
      <RefForm></RefForm>
      <CustomHookForm></CustomHookForm>
      <ReUseableForm
        // handleSubmit={handleSignUpSubmit}
        submitBtnText={"Sign Up"}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Sign up to continue</p>
        </div>
      </ReUseableForm>
      <ReUseableForm
        // handleSubmit={handleUpdateSubmit}
        submitBtnText={"Update"}
      >
        <div>
          <h2>Update</h2>
          <p>Update your information!</p>
        </div>
      </ReUseableForm>
    </>
  );
}

export default App;
