import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setData(data);
      });
    }, [url]);
    return data;
  };
export default useFetch;
