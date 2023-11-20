import { DECK_DRAW } from "./types";


const fetchCardSuccess = (cardJson) => {
    console.log('cardJson', cardJson);
    return ({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards : cardJson.cards,
        remaining : cardJson.remaining
    });
}

const fetchCardError = (error) => {
    return ({
        type: DECK_DRAW.FETCH_ERROR,
        message : error.message
    });
}

export const fetchNextCard = (deck_id) => (dispatch) => {
    return ( 
     fetch(`https://deck-of-cards-api-wrapper.appspot.com/deck/${deck_id}/draw`)
     .then(respone =>  {
        if(respone.status !== 200){
            throw new Error('New card cannot be drawn. Please try again!!')
        }
       return respone.json()
     }
    )
     .then(json => fetchCardSuccess(json)) 
     .catch(error => fetchCardError(error)) 
    )
}