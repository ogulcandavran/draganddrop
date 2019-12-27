/* import React, { Component } from "react";
const dropZoneElementss = {
  formName: `Name: ${<input type="text"></input>}`,
  email: 'E-Mail : <input type="email"><input/>'
};
export default class CreateFormZone extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.dropZoneElements.map((el, index) => {
          return (
            <div
              onDrop={e => this.props.onDrop(e)}
              onDragOver={e => this.props.onDragOver(e)}
              key={index}
            >
              {dropZoneElementss[el.type]}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
} */

/* import React, { Component } from "react";

const formElements = [{ id: 1, type: "formName" }, { id: 2, type: "email" }];
const dropZoneElementss = {
  formName: (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text"></input>
    </div>
  ),
  email: (
    <div>
      <label htmlFor="name">E-Mail</label>
      <input id="name" type="text"></input>
    </div>
  )
};

export default class App extends Component {
  state = {
    formElements: formElements,
    draggedElement: {},
    dropZoneElements: []
  };
  onDragOver = e => {
    e.preventDefault();
  };
  onDrop = e => {
    const { dropZoneElements, draggedElement } = this.state;
    this.setState({
      dropZoneElements: [...dropZoneElements, draggedElement],
      draggedElement: {}
    });
  };
  onDragStart = (e, el) => {
    //e.preventDefault();
    this.setState({ draggedElement: el });
  };

  draggableMapping = () => {};
  render() {
    return (
      <div className="container">
        <div className="drag-zone">
          {this.state.formElements.map((el, index) => {
            return (
              <div
                className="drag-zone-elements"
                key={el.id}
                draggable
                //onDragStart={e => this.onDragStart(e, el)}
                onDragStart={e => this.onDragStart(e, el)}
                //onDrag={e=> this.onDragOver(e)}
              >
                {el.type}
              </div>
            );
          })}
        </div>
        <div
          className="drop-zone"
          onDrop={e => this.onDrop(e)}
          onDragOver={e => this.onDragOver(e)}
        >
          {this.state.dropZoneElements.map((el, index) => {
            return (
              <div
                //onDrop={e => this.onDrop(e)}
                //onDragOver={e => this.onDragOver(e)}
                key={index}
              >
                {dropZoneElementss[el.type]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
 */