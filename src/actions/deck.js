import { FETCH_DECK_RESULT } from "./types";

export const fetchDeck = (deckJson) => {

    const {deck_id, remaining} = deckJson;
    return({
        type: FETCH_DECK_RESULT,
        deck_id,
        remaining
    });
}

export const fetchNewDeck = ()=>(dispatch) => {
    return (
     fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle') 
        .then(response  => response.json())
         .then( json =>  dispatch(fetchDeck(json)))
         .catch( error => alert(error.message))
     );
}