import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  const [userInputValues, setUserInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInputValues.duration >= 1;

  const collectUserInputValues = (inputId, inputValue) => {
    setUserInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputId]: +inputValue,
    }));
  };

  return (
    <>
      <Header />
      <main>
        <UserInput
          userInputValues={userInputValues}
          onCollectInputValue={collectUserInputValues}
        />
        {inputIsValid ? (
          <Results userInputValues={userInputValues} />
        ) : (
          <p className='center'>Please enter a duration greater then zero.</p>
        )}
      </main>
    </>
  );
};

export default App;
