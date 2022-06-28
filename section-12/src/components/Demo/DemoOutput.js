import React from "react";
import MyParagraph from "./MyParagraph";


const DemoOutput = (props) => {
    console.log("demo");
    return <MyParagraph>{props.show ? 'This is new' : ''}</MyParagraph>
}

// Memo: only reload component if new prop is recieved.
// Only works with props that are primitive values (string, booleans).
export default React.memo(DemoOutput);