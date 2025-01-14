import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInputValues, setUserInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const collectUserInputValues = (id, value) => {
    setUserInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  return (
    <>
      <Header />
      <main>
        <div className='test'>
          {userInputValues && (
            <ul>
              {Object.entries(userInputValues).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          )}
        </div>
        <UserInput
          userInputValues={userInputValues}
          onCollectInputValue={collectUserInputValues}
        />
        <Result />
      </main>
    </>
  );
}

export default App;
