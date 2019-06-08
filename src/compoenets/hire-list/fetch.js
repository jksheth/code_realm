import React, {useState, useEffect}  from 'react'

function useFetch(url) {
    let [isLoading, setIsLoading] = useState(true)
    let [output, setOutput] = useState(true)

    useEffect(() => {
        fetch(url).then((response) => { return response.json()}).then((json)=> {
            setIsLoading(false)
            setOutput(JSON.stringify(json)).catch(()=> {setOutput('{}')})
        })
    },[setIsLoading,setOutput,url])

    return [isLoading,output]
}

export default useFetch