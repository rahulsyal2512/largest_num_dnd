import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Numbers } from "./initialData";
import NumberBoxes from "./numberBoxes";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  div.boxes {
    display: flex;
    justify-content: space-around;
  }
`;

class QuestionAnswer extends Component {
  render() {
    return (
      <Container>
        <Droppable droppableId="question">
          {provided => (
            <div
              className="boxes"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {Numbers.map((number, index) => (
                <NumberBoxes key={index} number={number} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default QuestionAnswer;
