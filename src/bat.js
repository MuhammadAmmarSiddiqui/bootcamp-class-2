import React from 'react';

function Bat (props){
    return (
        <div>
            <p><b>{props.batsman} scored {props.runs} runs on {props.balls} balls</b></p>
        </div>
    );
}

export default Bat;