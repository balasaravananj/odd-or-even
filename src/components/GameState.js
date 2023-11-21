import React from "react";
import {connect} from 'react-redux';


const GameState = ({remaining, correctGuesses}) => {

    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';

    return (<div>
        <h3>Record:</h3>
        <p>Cards remaining:{remaining}</p>
        <p>Number of correct {guessText}:{correctGuesses} </p>
    </div>)
}

const mapStateToProps = state => {
    return {
        remaining : state.deck.remaining,
        correctGuesses : state.gameState.correctGuesses
    }
}

export default connect(mapStateToProps)(GameState);