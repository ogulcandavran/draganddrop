import React, { Component } from "react";
import uuid from "uuid/v4";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const formElements = [
  {
    id: uuid(),
    type: "formName",
    formVersion: (
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text"></input>
      </div>
    )
  },
  {
    id: uuid(),
    type: "email",
    formVersion: (
      <div>
        <label htmlFor="email">E-Mail</label>
        <input id="email" type="text"></input>
      </div>
    )
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formElements: formElements,
      draggedElement: {},
      dropZoneElements: []
    };
    React.createRef();
  }

  /*  state = {
    formElements: formElements,
    draggedElement: {},
    dropZoneElements: []
  }; */

  onDragStart = (e, el) => {
    //e.preventDefault();
    this.setState({ draggedElement: el });
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

  /* onDragStart = result => {
    //this.setState({ draggedElement: el }); TODO
  }; */

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    //outside of droppable
    if (!destination) {
      return;
    }
    //dragged on itself
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //use result object of the library, create new indexes and create a new array of form elements of that indexes, update the state
    const newIds = this.state.dropZoneElements.map((el, index) => index);
    newIds.splice(source.index, 1);
    newIds.splice(destination.index, 0, draggableId);
    console.log(newIds);
    const newArray = newIds.map(el => this.state.dropZoneElements[el]);
    this.setState({ dropZoneElements: newArray });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          <div className="drag-zone">
            {this.state.formElements.map((el, index) => {
              return (
                <div
                  className="drag-zone-elements"
                  key={index}
                  draggable
                  onDragStart={e => this.onDragStart(e, el)}
                >
                  {el.type}
                </div>
              );
            })}
          </div>

          <Droppable droppableId="form">
            {provided => (
              <div
                className="drop-zone"
                {...provided.droppableProps}
                ref={provided.innerRef}
                onDrop={e => this.onDrop(e)}
                onDragOver={e => this.onDragOver(e)}
              >
                {this.state.dropZoneElements.map((el, index) => {
                  return (
                    <Draggable
                      draggableId={index.toString()}
                      index={index}
                      key={index}
                    >
                      {provided => (
                        <div
                          key={index}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {el.formVersion}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

/* <CreateFormZone
            dropZoneElements={this.state.dropZoneElements}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          /> */
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
              draggedElement: null,
              dropZoneElements: []
            };
            onDragOver = e => {
              e.preventDefault();
            };
            onDrop = e => {
              const { dropZoneElements, draggedElement } = this.state;
              this.setState({
                dropZoneElements: [...dropZoneElements, draggedElement]
                //draggedElement: {}
              });
            };
            onDrag = (e, el) => {
              e.preventDefault();
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
                          //onDragStart={e => this.onDrag(e, el)}
                          onDrag={e => this.onDrag(e, el)}
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
                          onDrop={e => this.onDrop(e)}
                          onDragOver={e => this.onDragOver(e)}
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
          } */

/*  import React, { Component } from "react";

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
      <label htmlFor="email">E-Mail</label>
      <input id="email" type="text"></input>
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
  onDrag = (e, el) => {
    e.preventDefault();
    this.setState({ draggedElement: el });
  };
  onDragStart = (e, index) => {
    this.draggedItem = index;
    //e.dataTransfer.effectAllowed = "move";
    //e.dataTransfer.setData("text/html", e.target.parentNode);
    //e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOverRight = index => {
    const draggedOverItem = index;

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.dropZoneElements.filter((item,index) => index !== this.draggedItem);
    
    
    // add the dragged item after the dragged over item
    items.splice(index, 0, this.state.dropZoneElements[this.draggedItem]);
    
    this.setState({ dropZoneElements:items });
  };

  onDragEnd = () => {
    this.draggedItem = null;
  };

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
                //onDragStart={e => this.onDrag(e, el)}
                onDrag={e => this.onDrag(e, el)}
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
              className="form-elements"
                //onDrop={e => this.onDrop(e)}
                onDragOver={() => this.onDragOverRight(index)}
                draggable
                onDragStart={e=> this.onDragStart(e,index)}
                key={index}
                onDragEnd={this.onDragEnd}
              >
                {dropZoneElementss[el.type]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
} */

/* const dropZoneElementss = {
  formName: (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text"></input>
    </div>
  ),
  email: (
    <div>
      <label htmlFor="email">E-Mail</label>
      <input id="email" type="text"></input>
    </div>
  )
}; */
