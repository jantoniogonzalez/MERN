import React from "react";
const Word1 = props =>{
    const word1 = props.id;
    const font = props.font;
    const background = props.back;
    return(
        isNaN(font) && isNaN(background)?
        <h1 style={{color:font, backgroundColor:background}}>{ word1 }</h1>
        :<h1>{ word1 }</h1>
    )
}

export default Word1;