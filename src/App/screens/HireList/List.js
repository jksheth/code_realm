import React from 'react';
import isEmpty from 'lodash/isEmpty';

import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader';

import { useAppState } from '../../context/app-context'

const Table = ({ data }) => {

  // Will set selected user
  console.log(useAppState())

  if (!data.length) {
    return null;
  }
  let tbodyContent = data.map((record, index) => (
    <tr key={record.email}>
      <td>
        <input type="checkbox" className="hire-list--checkbox" name={`checkbox-${index}`} />
      </td>
      <td>{index}</td>
      <td>{record.firstName}</td>
      <td>{record.lastName}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
    </tr>
  ));

  return (
    <div className="table table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>{tbodyContent}</tbody>
      </table>
    </div>
  );
};

const List = () => {
  const { loading, error, data } = useFetch({
    url: '/assignment.json'
  });
  let pageContent = null;

  if (loading) {
    pageContent = <Loader />;
  } else if (!isEmpty(error)) {
    pageContent = (
      <div className="alert alert-danger">
        Something went wrong. Please try again!
        {JSON.stringify(error)}
      </div>
    );
  } else {
    pageContent = <Table data={data} />;
  }

  return <div className="hire-list">{pageContent}</div>;
};
export default List;
