import {useState, useEffect} from 'react';
import rawData from '../assignment';

const useLoadData = url => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch(url)
        // .then(function(response) {
        //     return response.json();
        // })
        // .then(function(result) {
        //     setData(result);
        // });
        setData(rawData);
    });
    
    return [rawData];
}

export default useLoadData
