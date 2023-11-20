import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/settings';



class App extends Component {

    render(){
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
                        <button onClick={this.props.startGame}>Start Game</button>
                         </div>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStarted : state.gameStarted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(startGame()),
        endGame: () => dispatch(endGame())
    };
};

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);