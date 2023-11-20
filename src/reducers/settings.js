import { SET_GAME_STARTED, SET_EXPAND_INSTRUCTION} from "../actions/types";

const DEFAULT_SETTINGS = {
    gameStarted : false,
    expandInstruction : false
 };

const settingReducer = (state = DEFAULT_SETTINGS, action) => {

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
       default:
          return state;
    }
 }

 export default settingReducer;