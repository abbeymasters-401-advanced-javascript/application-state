import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ count, face }) => {
  return (
    <div>
      <section>
        <p>Coffee Count: {count.coffees}</p>
        <p>Snack Count: {count.snacks}</p>
        <p>Nap Count: {count.naps}</p>
        <p>Study Count: {count.studies}</p>
      </section>
      <p>Last Face: {face}</p>
    </div>
  );
};


HistoryItem.propTypes = {
  count: PropTypes.shape({
    coffees: PropTypes.number.isRequired,
    snacks: PropTypes.number.isRequired,
    naps: PropTypes.number.isRequired,
    studies: PropTypes.number.isRequired
  }).isRequired,
  face: PropTypes.string.isRequired
};

export default HistoryItem;
