import settingReducer from "./settings";
import deckReducer from "./deck";
import gameStateReducer from "./gameStates";

export default {
   deck: deckReducer,
   settings: settingReducer,
   gameState :gameStateReducer
}