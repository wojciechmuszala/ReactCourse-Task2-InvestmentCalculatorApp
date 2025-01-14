export default function UserInput({ onCollectInputValue }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial investment</label>
          <input
            id='initial-investment'
            type='number'
            onInput={onCollectInputValue}
          />
        </p>
        <p>
          <label htmlFor='annual-investiment'>Annual investiment</label>
          <input
            id='annual-investiment'
            type='number'
            onInput={onCollectInputValue}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected return</label>
          <input
            id='expected-return'
            type='number'
            onInput={onCollectInputValue}
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input id='duration' type='number' onInput={onCollectInputValue} />
        </p>
      </div>
    </section>
  );
}
