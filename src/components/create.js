import React,{useState} from "react";

const Create=(props)=>{

    const [inputField,setinputField]=useState(0);

    return (<div className="container">
        <div class="form-group">
        <label>ID</label>
        <input type="text" readOnly/>
        </div>  
        <div class="form-group">
        <label>First Name</label>
        <input type="text" value=""/>
        </div>  
        </div>
    )
}
export default Create;