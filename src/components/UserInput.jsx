import { useState } from "react";

export default function UserInput() {
  const [userInputValues, setUserInputValues] = useState(null);

  const getUserInputValues = (event) => {
    const { id, value } = event.target;
    setUserInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  return (
    <section id='user-input'>
      {userInputValues && (
        <ul>
          {Object.entries(userInputValues).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial investment</label>
          <input
            id='initial-investment'
            type='number'
            onInput={getUserInputValues}
          />
        </p>
        <p>
          <label htmlFor='annual-investiment'>Annual investiment</label>
          <input
            id='annual-investiment'
            type='number'
            onInput={getUserInputValues}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected return</label>
          <input
            id='expected-return'
            type='number'
            onInput={getUserInputValues}
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input id='duration' type='number' onInput={getUserInputValues} />
        </p>
      </div>
    </section>
  );
}
