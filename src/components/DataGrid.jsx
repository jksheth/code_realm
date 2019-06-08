import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridRow from './GridRow';
import "../index.css";

class DataGrid extends Component {

  onRowSelect = (id) => {
      console.log(id);
  }

  render() {
     return (<div>
     <div className="row">
        <div className="col"> <input type="checkbox"/></div>
        <div className="col">Id</div>
        <div className="col">First Name</div>
        <div className="col">Last Name</div>
        <div className="col">Email</div>
        <div className="col">Phone Number</div>
    </div>
    <div>
    {this.props.candidates.map((candidate, index) => 
        <GridRow key={index} candidate = {candidate} id = {index + 1} onRowSelect = {this.onRowSelect} />
    )}
    </div>
    </div>
     );
  }
}
//PropTypes
DataGrid.propTypes = {
  candidates: PropTypes.array.isRequired
}
export default DataGrid;