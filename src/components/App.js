import React, { Component } from 'react';
import { connect } from 'react-redux';



class App extends Component {

    render(){
        return(
            <div>
                <h1>React Project!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStarted : state.gameStarted
    };
}

const componentConnector = connect(mapStateToProps);

export default componentConnector(App);