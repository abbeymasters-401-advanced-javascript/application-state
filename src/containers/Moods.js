/* eslint-disable no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import Timer from '../components/timer/Timer';
import styles from './Moods.css';
import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, RESET_GAME, saveGame } from '../actions/moodsActions';
import { getCoffees, getSnacks, getNaps, getStudies, getFace } from '../selectors/moodsSelectors';
import History from '../components/History/History';

const actions = [
  { name: DRINK_COFFEE, text: 'Drink Coffee', stateName: 'coffees' },
  { name: EAT_SNACK, text: 'Snack', stateName: 'snacks' },
  { name: TAKE_NAP, text: 'Nap', stateName: 'naps' },
  { name: STUDY, text: 'Study', stateName: 'studies' },
];

const Moods = ({ count, face, actions, handleSelection, handleReset, handleSaveGame, history }) => {
  const [render, setRender] = useState(false);

  const handleClick = () => {
    setRender(true);
  };

  const controlActions = actions.map(action => ({
    ...action,
    count: count[action.stateName]
  }));


  return (
    <div className={styles.Moods}>
      <button onClick={handleClick}>Start</button>

      {render ? (
        <>
          <button onClick={handleReset}>Reset Game</button>
          <button onClick={ () => handleSaveGame({ count, face })}>Save Game</button>
          <Controls actions={controlActions} handleSelection={handleSelection} />
          <Face emoji={face} />
          <Timer setRender={setRender} />
          <History history={history} />
        </>
      ) : (
        console.log('Timer is stopped.')
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  count: {
    coffees: getCoffees(state),
    snacks: getSnacks(state),
    naps: getNaps(state),
    studies: getStudies(state),
  },
  face: getFace(state),
  actions, 
  history: state.game
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  },
  handleReset() {
    dispatch({
      type: RESET_GAME
    });
  },
  handleSaveGame(game) {
    dispatch(saveGame(game));
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);


Moods.propTypes = {
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  face: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSaveGame: PropTypes.func.isRequired
};

export default MoodsContainer;

