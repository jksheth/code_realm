import React, { Component } from 'react';
const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const MyConsumer = MyContext.Consumer;

export { MyProvider,  MyConsumer};
