import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "../index.css";

class GridRow extends Component {
  render() {
      const {Id,firstName,LastName,email,phone} = this.props.candidate;
    return (
      <div className="row">
       <div className="col"> <input type="checkbox" onChange={this.props.onRowSelect.bind(this, Id)}/></div>
        <div className="col">{Id}</div>
        <div className="col">{firstName}</div>
        <div className="col">{LastName}</div>
        <div className="col">{email}</div>
        <div className="col">{phone}</div>
      </div>
    )
  }
}
//PropTypes
GridRow.propTypes = {
  candidate:PropTypes.object.isRequired,
  onRowSelect: PropTypes.func.isRequired
}

export default GridRow;
