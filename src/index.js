import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import QuestionAnswer from "./QuestionAnswer";

const Answer = styled.div`
  width: 20vh;
  height: 20vh;
  background: orange;
  text-align: center;
  align-items: center;
  display: flex;
  background: ${props =>
    props.isDraggingOver && props.number === "Fifteen" ? "green" : "orange"};
  text-align: ${props => props.isDraggingOver && "center"};
`;
const Margin = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  state = {
    number: ""
  };
  onDragEnd = result => {
    const { destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === "answer" && draggableId === "Fifteen") {
      this.setState({ number: "" });
      alert("Correct Answer");
    }
    console.log(result);
  };

  onDragStart = result => {
    const { draggableId } = result;
    console.log(result);
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
          <Margin>
            <Droppable droppableId="answer">
              {(provided, snapshot) => (
                <Answer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  number={number}
                >
                  Drag Your Answer Here
                  {provided.placeholder && null}
                </Answer>
              )}
            </Droppable>
          </Margin>
        </DragDropContext>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
