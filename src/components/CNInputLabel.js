import React from "react"


const CNInputLabel  = React.memo(({ name, bind={} }) => {
    return(
        <div>
            <label>{name}</label>
            <input
                name={name}
                {...bind}
            ></input>
        </div>
    );
});

export default CNInputLabel;