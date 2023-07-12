import React from "react";

//  function Greetings(){
//     return <h1> greetings</h1>
// }

function Greetings (props) {
    console.log(props)
    return <h1>Hello, {props.name}</h1>
} 
export default Greetings