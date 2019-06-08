import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HireList from './assign/HireList';
import NewDetailPage from './assign/NewDetailPage';
import EditDetailPage from './assign/EditDetailPage';

function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
      <Switch>
            <Route exact path='/edit' component={EditDetailPage} />
            <Route exact path='/new' component={NewDetailPage} />
            <Route exact path='/hirelist' component={HireList} />
            <Redirect exact from='/' to='/hirelist'/>
      </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
};

const MyContext = React.createContext();
class MyProvider extends React.Component {
  state={
    employee: null
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        updateState:(employee) => this.setState({
          employee
        })
      }} >
        <App />
      </MyContext.Provider>
    )
  }
}

export default MyProvider;