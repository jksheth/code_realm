import React from 'react';
import List from './List';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  color: #999;
  &:hover {
    color: #000;
  }
`;

const editUser = () => {
}

const HireList = () => {
  return (
    <div id="hire-list" className="page">
      <div className="container">
        <header className="hire-list--header">
          <H1>Hire List</H1>
        </header>
        <main>
          <List />
        </main>
        <footer className="hire-list--footer d-flex justify-content-between">
          <Link to="/user/new" className="btn btn-primary">
            Add
          </Link>
          <button type="button" className="btn btn-primary" onClick={editUser}>
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
};
export default HireList;
