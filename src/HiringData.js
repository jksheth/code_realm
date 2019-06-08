import React, {useReducer} from 'react';
import HireTable from './HireTable';
import ActionBar from "./ActionBar";

function HiringData({data}) {
    return (
        <>
            <HireTable data={data} />
            <ActionBar />
        </>
    );
}

export default HiringData;