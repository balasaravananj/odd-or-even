import React from "react";
import  { connect } from 'react-redux';
import { fetchNextCard } from "../actions/deckDraw";

const DrawCard = ({deck_id, fetchNextCard}) => {
    return(
         <div>
            <button onClick={fetchNextCard(deck_id)}>Draw the next card!</button>
         </div>
    );
}

const mapStateToProps = (state) => {
    return {
        deck_id : state.deck.deck_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNextCard: deck_id => () => dispatch(fetchNextCard(deck_id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DrawCard);