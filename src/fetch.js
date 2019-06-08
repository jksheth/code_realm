import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  let [isLoading, setIsLoading] = useState(true);
  let [output, setOutput] = useState('[]');

  // console.log(url)
  useEffect(() => {
    fetch(url).then(res => {
      console.log(res, 'inside hook fetch')
      return res.json();
    }).then(json => {
      console.log(json, 'inside hook json')
      setIsLoading(false)
      setOutput(JSON.stringify(json))
    }).catch(() => {
      setOutput('[]')
    })
  }, [setIsLoading, url, setOutput])

  return [isLoading, output]
}

export default useFetch;