import { useState } from "react"


export const useInput = (name) => {
    const [ value, setValue ] = useState("");

    return {
        value,
        bind: {
            //name: name,
            type: "text",
            value,
            onChange: (e) => setValue(e.target.value),
        }
    };
}