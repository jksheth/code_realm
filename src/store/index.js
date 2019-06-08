
import assignment from '../data/assignment.json';

export const initialState = {
    employeeList: assignment,
    formValue: {},
    selectedItems: []
};
  
export function reducer(state, action) {
    switch (action.type) {
        case 'updateForm':
        return {formValue: {...state.formValue, ...action.payload}};
        case 'updateEmployeeList':
        return {employeeList: [...state.employeeList, ...action.payload]};
        default:
        throw new Error();
    }
}