import { Component } from "react";


class Instructions extends Component {

    render(){
        console.log('Instruction', this.props);
        const { expandInstruction, instructionExpand, instructionCollapse} = this.props.instruction;

        const FULL_INSTRUCTION = `Welcome to Odd or Even. The game goes like this.
                         The deck is shuffled. Then choose: will the next card be odd or even?
                             Make a choice on every draw, and see how many you get right!
                                                  (Face cards don't count)`
        return(
            <div>
                <h3>Instructions!</h3>
                {
                    expandInstruction ? (
                        <div> 
                            <p>{FULL_INSTRUCTION}</p>
                            <button onClick={instructionCollapse}>Show less</button>
                        </div>
                    ) : (
                        <div>
                          <p>Welcome to Odd or Even. The game goes like this...</p>
                          <button onClick={instructionExpand}>Read more</button>
                        </div>
                        
                    )
                }
                
               
            </div>
        );
    }
}

export default Instructions;