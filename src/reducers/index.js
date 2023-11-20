import { SET_GAME_STARTED, SET_EXPAND_INSTRUCTION, FETCH_DECK_RESULT } from "../actions/types";


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
       case FETCH_DECK_RESULT:
        const {remaining, deck_id} = action;
        return {
            ...state,
            remaining,
            deck_id
        };
       default:
          return state;
    }
 }

 export default rootReducer;