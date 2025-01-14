export default function UserInput({ onCollectInputValue }) {
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
            required
          />
        </p>
        <p>
          <label htmlFor='annual-investiment'>Annual investiment</label>
          <input
            id='annual-investiment'
            type='number'
            onInput={(event) =>
              onCollectInputValue("annualInvestiment", event.target.value)
            }
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
            required
          />
        </p>
      </div>
    </section>
  );
}
