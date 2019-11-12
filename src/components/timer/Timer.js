import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

const Timer = ({ setRender }) => {
  const [seconds, setSeconds]  = useState(5);

  useEffect(() => {
    const interval = setTimeout(() => {
      if(seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }
      if(seconds === 0) {
        clearTimeout(interval);
        setRender(false);
        store.dispatch({
          type: 'SET_TO_ZERO',
          paylod: 0
        });
      }
    }, 1000);
    return () => clearTimeout(interval);
  });

  return (
    <h2>{seconds}</h2>
  );
};

Timer.propTypes = {
  setRender: PropTypes.func.isRequired
};

export default Timer;
