import React, {useState, useEffect} from 'react';
/**
 * 
 * @param {*} url 
 */
const useFetch = (url) => {
    let [isLoading, setIsLoading] = useState(false);
    let [output,setOutput] = useState('{}');

    useEffect(() => {
        fetch(url).then((response) => {
            // console.log('response:', response.json());
           return response.json();           
        }).then((json) => {
            console.log('json:', json);
            // setIsLoading(false);
            setOutput(JSON.stringify(json));
        }).catch((error) => {
            console.log(error)
            setOutput('{}')

        })
    }, [setIsLoading, setOutput, url]);

    return [isLoading, output];
}

export default useFetch;