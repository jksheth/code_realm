import React from 'react';

export const SelectionContext = React.createContext();

class SelectionProvider extends React.Component {
  state = {
    selectedRows: []
  };

  render() {
    return (
      <SelectionContext.Provider
        value={{
          selectedRows: this.state.selectedRows,
          select: id =>
            this.setState(prevState => {
              const isSelected = prevState.selectedRows.indexOf(id) !== -1;
              let udpatedRowList = [];
              if (isSelected) {
                udpatedRowList = prevState.selectedRows.filter(s => s !== id);
              } else {
                udpatedRowList = [...prevState.selectedRows, id];
              }
              return {
                selectedRows: udpatedRowList
              };
            })
        }}
      >
        {this.props.children}
      </SelectionContext.Provider>
    );
  }
}

export default SelectionProvider;
