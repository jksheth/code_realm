import React from 'react';



const Input = (props) => {
  const editable = props.editable ? 'readonly' : '';
  let inputBox;

  if (props.inputType === 'radio') {
    inputBox = <div>
      <label htmlFor="work">Work Remotly</label>
      <input type="radio" name="workType" id="work" />
      <input type="radio" name="workType" id="work" />
    </div>
  } else if (props.inputType === 'select') {
    
    let opts = props.options.map((i) => {

      console.log(i)
      return <option value={i} key={i}>{i}</option>
    });

    console.log(opts)
    
    inputBox =
      <div>
        <label htmlFor="work">Seeking Job</label>
        <select name="seeking-job" id="sj">
          {opts}
        </select>
      </div>
  } else {
    inputBox = <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={props.value}
        readOnly={editable} />
    </div>;
  }
  return inputBox;
}

export default Input;