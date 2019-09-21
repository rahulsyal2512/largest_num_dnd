import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Box = styled.div`
  width: 10vh;
  height: 10vh;
  background: #00bfff;
  margin-top: 20px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (min-width: 1000px) {
    width: 15vh;
    height: 15vh;
  }
`;

export default class NumberBoxes extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.number} index={this.props.index}>
        {provided => (
          <Box
            className="box"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.number}
          </Box>
        )}
      </Draggable>
    );
  }
}
