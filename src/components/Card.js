import React from "react";
import { connect } from 'react-redux';

const Card = ({cards}) => {
    if(!cards[0]) return null;
    const {value, image, suit} = cards[0];
    return (<div>
        <p>It's {value} of {suit}</p>
        <img src={image} alt="card-image"></img>
    </div>);
}

export default connect(({
    deck: {cards}}) => ({cards})
    )(Card);