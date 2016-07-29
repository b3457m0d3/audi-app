require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
require("./app/styles/grid.css")
import React from 'react';

import Sequencer from './app/components/sequencer.jsx';
import Row from './app/components/row.jsx';
import Cell from './app/components/cell.jsx';

class Grid extends React.Component {
	constructor(props){
		super(props);
    if(this.props.undo){
      this.state.history = Immutable.List();
      this.state.future = Immutable.List();
      this.state.items = Immutable.fromJS(grid);
    }
  }
  onClick = (rowId, colId) => {
    if(this.props.undo){
      var newItems = this.state.items.updateIn([rowId, 'grids', colId, 'active'], active => !active);
      this.setState({
        history: this.state.history.push(this.state.items),
        items: newItems
      });
    }
  }
  unDo: function() {
    if(this.props.undo){
      if (this.state.history.size < 1) return;
      this.setState({
        history: this.state.history.pop(),
        future: this.state.future.push(this.state.items),
        items: this.state.history.last()
      });
    }
  }
  reDo: function() {
    if(this.props.undo){
      if (this.state.future.size < 1) return;
      this.setState({
        items: this.state.future.last(),
        history: this.state.history.push(this.state.items),
        future: this.state.future.pop()
      }
    }
  }
	render(){
		return (
      <div>
        <Sequencer onClick={this.onClick} grid={this.state.items} />
        <button className="btn btn-default" disabled={this.state.history.size < 1} onClick={this.unDo}>Undo</button>
        <button className="btn btn-default" disabled={this.state.future.size < 1} onClick={this.reDo}>Redo</button>
      </div>
		);
	}
}

React.render(<Grid undo=false />, document.querySelector("#myApp"));
