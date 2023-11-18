import { SET_GAME_STARTED, SET_EXPAND_INSTRUCTION } from "./types";

export const startGame = () => {
    return {
       type : SET_GAME_STARTED,
       gameStarted : true
    };
 }
 
export const endGame = () => {
    return {
       type: SET_GAME_STARTED,
       gameStarted : false
    };
 }
 
export const instructionExpand = () => {
    return {
       type: SET_EXPAND_INSTRUCTION,
       expandInstruction: true
    };
 }
 
export const instructionCollapse = () => {
    return {
       type: SET_EXPAND_INSTRUCTION,
       expandInstruction: false
    };
 }