import { DECK } from "../actions/types";
import fetchstates from "./fetchstates";

const DEFAULT_DECK = {
    deck_id : '',
    remaining : 0,
    fetchstates : '',
    message: ''
 };

const deckReducer = (state = DEFAULT_DECK, action) => {

    switch(action.type){
       case DECK.FETCH_SUCCESS:
        const {remaining, deck_id} = action;
        return {
            ...state,
            remaining,
            deck_id,
            fetchstates: fetchstates.success
        };
      case DECK.FETCH_ERROR:
         const {message} = action;
         return {
            ...state,
            message,
            fetchstates: fetchstates.error
         }
       default:
          return state;
    }
 }

 export default deckReducer;


