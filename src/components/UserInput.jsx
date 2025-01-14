export default function UserInput({ onCollectInputValue, userInputValues }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial investment</label>
          <input
            id='initial-investment'
            type='number'
            onInput={(event) =>
              onCollectInputValue("initialInvestment", event.target.value)
            }
            value={userInputValues.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor='annual-investiment'>Annual investiment</label>
          <input
            id='annual-investiment'
            type='number'
            onInput={(event) =>
              onCollectInputValue("annualInvestment", event.target.value)
            }
            value={userInputValues.annualInvestment}
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected return</label>
          <input
            id='expected-return'
            type='number'
            onInput={(event) =>
              onCollectInputValue("expectedReturn", event.target.value)
            }
            value={userInputValues.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            id='duration'
            type='number'
            onInput={(event) =>
              onCollectInputValue("duration", event.target.value)
            }
            value={userInputValues.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
