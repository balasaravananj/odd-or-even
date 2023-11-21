import React from "react";
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from "../actions/guess";


const Guess = (props) => {
    const {guess, setGuessEven, setGuessOdd} = props;
    return (
           <div>
             <h3>Will it be even or odd?</h3>
             <button 
                onClick={setGuessEven}
                style={guess==='even' ? {border: '2px solid #43a047'} : null}
             >Even</button>
             {' '}
             <button 
                onClick={setGuessOdd}
                style={guess==='odd' ? {border: '2px solid #43a047'} : null}
                >Odd</button>
          </div>);
}
const mapStateToProps = (state) => {
    return {
        guess : state.gameState.guess,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGuessEven : () => dispatch(setGuessEven()),
        setGuessOdd : () => dispatch(setGuessOdd())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guess);