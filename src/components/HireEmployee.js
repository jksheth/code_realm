import React from 'react';

const HireEmployee = ({props})=>{
    console.log(props);
    let employeeData = props;
    console.log('dfra',employeeData);
    return  employeeData.map((employee,key)=>{
       return (
        <div className={'employee'+key}>
        {console.log('hi',employee)}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="col-lg-2"><input type="checkbox"></input></td>
                        <td className="col-lg-2">{key}</td>
                        <td className="col-lg-4">{employee.firstName}</td>
                        <td className="col-lg-4">{employee.LastName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    })
}

export default HireEmployee;