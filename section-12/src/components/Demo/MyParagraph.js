import React from "react";

const MyParagraph = (props) => {
    console.log("my paragrah");
    return <p>{props.children}</p>
}

export default MyParagraph;