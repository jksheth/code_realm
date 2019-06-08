//@ts-check
export const reducer = (state, action) => {
    switch(action.type){
        case 'id':
            return {
                id: action.payload.id
            }
        case 'first_name': 
            return {
                'first-name': action.payload.first_name
            }
        default: 
            return state

    }
}