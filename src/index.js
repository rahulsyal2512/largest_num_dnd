import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import QuestionAnswer from "./QuestionAnswer";

const Answer = styled.div`
  width: 20vh;
  height: 20vh;
  background: orange;
  margin: 100px auto;

  background: ${props =>
    props.isDraggingOver && props.number === "Fifteen" ? "green" : "orange"};
`;

class App extends Component {
  state = {
    number: ""
  };
  onDragEnd = result => {
    const { destination, draggableId } = result;
    if (destination.droppableId === "answer" && draggableId === "Fifteen") {
      this.setState({ number: "" });
      alert("Correct Answer");
    }
    console.log(result);
  };

  onDragStart = result => {
    const { draggableId } = result;
    this.setState({ number: draggableId });
  };
  render() {
    const { number } = this.state;
    return (
      <>
        <h1>Which is the greatest number?</h1>
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
        >
          <QuestionAnswer />
          <Droppable droppableId="answer">
            {(provided, snapshot) => (
              <Answer
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={true}
                number={number}
              >
                Drag Your Answer Here
                {provided.placeholder}
              </Answer>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
