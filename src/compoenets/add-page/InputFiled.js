import React from 'react'

const InputField = (props) => {

    return(
        <React.Fragment>
             <label>
           {props.name}
          <input type="text" ref={props.ref} />
        </label>
        <div></div>
        </React.Fragment>
    )
}

export default InputField