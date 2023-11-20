import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, endGame, instructionExpand, instructionCollapse } from '../actions/settings';
import Instructions from './Instructions';
import { fetchNewDeck } from '../actions/deck';
import fetchstates from '../reducers/fetchstates';


class App extends Component {

    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }

    render(){
        if(this.props.fetchstates === 'error'){
            return (<div>
                <p>Please try reloading the App. An error occurred</p>
                <p>{this.props.message}</p>
            </div>);
        }
         return(
                <div>
                    <h1> ♠ ♣ Odd or Even ♥ ♦ </h1>
                    {
                        this.props.gameStarted ? (
                            <div>
                                <h3>The game is on!</h3>
                                <br />
                                <button onClick={this.props.endGame}>Cancel Game</button>
                            </div>
                         ) : ( <div>
                            <h3>A new game awaits</h3>
                            <br />
                            <button onClick={this.startGame}>Start Game</button>
                             </div>)
                    }
                    <hr />
                    <Instructions instruction = {this.props} />
                </div>
            );
       
    }
}

const mapStateToProps = (state) => {
    return {
        gameStarted : state.settings.gameStarted,
        expandInstruction : state.settings.expandInstruction,
        fetchstates: state.deck.fetchstates,
        message: state.deck.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(startGame()),
        endGame: () => dispatch(endGame()),
        instructionExpand: () => dispatch(instructionExpand()),
        instructionCollapse: () => dispatch(instructionCollapse()),
        fetchNewDeck: () => fetchNewDeck(dispatch)
    };
};

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);