// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useState } from 'react';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };
  // const user = { displayName: 'Dr. T' };
  return (
    <>
      <h1>My Counter</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={() => setValue((prevState) => (prevState > 0 ? prevState - 1 : 0))}>Decrement</button>
      <button type="button" onClick={() => setValue(0)}>Reset</button>
    </>
  );
}

export default Home;
