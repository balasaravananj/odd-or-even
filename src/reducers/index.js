import { SET_GAME_STARTED, SET_EXPAND_INSTRUCTION, DECK } from "../actions/types";
import fetchstates from "./fetchstates";


const DEFAULT_SETTINGS = {
    gameStarted : false,
    expandInstruction : false
 };


const rootReducer = (state = DEFAULT_SETTINGS, action) => {

    switch(action.type){
       case SET_GAME_STARTED:
          return {
             ...state,
             gameStarted : action.gameStarted,
             
          };
       case SET_EXPAND_INSTRUCTION:
          return {
            ...state,
             expandInstruction: action.expandInstruction
          };
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

 export default rootReducer;