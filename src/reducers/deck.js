import { DECK, DECK_DRAW } from "../actions/types";
import fetchstates from "./fetchstates";

const DEFAULT_DECK = {
    deck_id : '',
    remaining : 0,
    fetchstates : '',
    message: '',
    cards: []
 };

const deckReducer = (state = DEFAULT_DECK, action) => {

   let remaining, deck_id, cards, message;

    switch(action.type){
       case DECK.FETCH_SUCCESS:
        ({remaining, deck_id} = action);
        return {
            ...state,
            remaining,
            deck_id,
            fetchstates: fetchstates.success
        };
      case DECK.FETCH_ERROR:
         ({message} = action);
         return {
            ...state,
            message,
            fetchstates: fetchstates.error
         }
      case DECK_DRAW.FETCH_SUCCESS:
         ({cards, remaining} = action);
         return {
            ...state,
            cards,
            remaining,
            fetchstates : DECK_DRAW.FETCH_SUCCESS
         }
      case DECK_DRAW.FETCH_ERROR:
         ({message} = action);
         return {
            ...state,
            message,
            fetchstates : DECK_DRAW.FETCH_ERROR
         }
       default:
          return state;
    }
 }

 export default deckReducer;


