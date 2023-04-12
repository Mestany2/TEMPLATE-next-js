import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ theName }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>{theName}s Counter</h1>
      {value === 10 ? (<h1>You da Winner</h1>) : (
        <>
          <h2>{value}</h2>
          <button type="button" className={value <= 0 ? 'btn btn-danger' : 'btn btn-primary'} onClick={handleClick}>Increment</button>
          {value <= 0 ? '' : (<button type="button" className="btn btn-primary" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</button>)}
          <button type="button" className="btn btn-primary" onClick={() => setValue(0)}>Reset</button>
        </>
      )}
    </>
  );
}

Counter.propTypes = {
  theName: PropTypes.string,
};

Counter.defaultProps = {
  theName: 'Default Animal',
};
