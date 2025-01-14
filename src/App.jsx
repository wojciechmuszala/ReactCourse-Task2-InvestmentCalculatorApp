import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInputValues, setUserInputValues] = useState(null);

  const collectUserInputValues = (event) => {
    const { id, value } = event.target;
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
        <UserInput onCollectInputValue={collectUserInputValues} />
        <Result />
      </main>
    </>
  );
}

export default App;
