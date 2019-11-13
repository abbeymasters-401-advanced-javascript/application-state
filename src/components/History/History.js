import React from 'react';
import HistoryItem from './HistoryItem';
import store from '../../store';
import styles from './History.css';
import PropTypes from 'prop-types';

const History = ({ history }) => {
  console.log(history);
  // let currentValue = store.getState();

  const historyItems = history.map(item => {
    return (
      <li key={item.count.naps}>
        <HistoryItem count={item.count} face={item.face} />
      </li>
    );
  });


  return (
    <div className={styles.History}>
      <h2>All Games:</h2>
      <ul>
        {historyItems}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired
};

export default History;
