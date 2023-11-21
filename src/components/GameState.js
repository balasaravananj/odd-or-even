import React from "react";
import {connect} from 'react-redux';

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_1';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));
    if(correctGuesses > record){
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);
         return {
            record : correctGuesses,
            isNewRecord : true
         }
    }

    return {record, isNewRecord : false};

}

const GameState = ({remaining, correctGuesses}) => {

    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';

    const {record , isNewRecord} = checkRecord(correctGuesses);

    const recordLabel = isNewRecord ? '🎊 New record' : 'Record';

    return (<div>
        <h3>{recordLabel}:{record}</h3>
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