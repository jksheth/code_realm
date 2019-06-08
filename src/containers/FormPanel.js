import React from "react"
import { useInput } from "../hooks/useInput"
import CNInputLabel from "../components/CNInputLabel"

const FormPanel = () => {
    const { bind } = useInput()
    return(
        <form>
            <CNInputLabel
                name= "ID"
            />
             <CNInputLabel
                name= "First Name"
            />
            <CNInputLabel
                name= "Last Name"
            />
            <CNInputLabel
                name= "Email Address"
            />
            <CNInputLabel
                name= "Phone"
            />
        </form>
    )
}