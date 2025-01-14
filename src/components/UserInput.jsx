export default function UserInput() {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label for='initial-investment'>Initial investment</label>
          <input id='initial-investment' type='number' />
        </p>
        <p>
          <label for='annual-investiment'>Annual investiment</label>
          <input id='annual-investiment' type='number' />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label for='expected-return'>Expected return</label>
          <input id='expected-return' type='number' />
        </p>
        <p>
          <label for='duration'>Duration</label>
          <input id='duration' type='number' />
        </p>
      </div>
    </section>
  );
}
