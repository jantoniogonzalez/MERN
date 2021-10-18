import React, {useState} from 'react';

const Display = (props) =>{
    const {boxList} = props;

    return(
        <div>
            {
                boxList.map((box, index) => (                   
                    <p style={{
                        width: box.width, backgroundColor: box.color, display: "inline-block", margin: "10px", height: box.width
                    }}>Hello!
                    </p>
                )
                )
            }
        </div>
    )
}
    


export default Display;