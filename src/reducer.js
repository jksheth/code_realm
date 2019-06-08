
function searchData(data, id) {
    //TODO: search for index of data with id
}

function reducer(state, action) {
    switch(action.type){
        case "add":
            return { data: state.data.concate(action.data)};
        case "edit":
            let newData = state.data.splice();
            let index = searchData(state.data, action.data.id);
            newData[index] = action.data;
            return { data: newData};
        case "delete":
                return {}
    }
}

export default reducer;