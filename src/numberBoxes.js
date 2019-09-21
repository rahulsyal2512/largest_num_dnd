import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Box = styled.div`
  width: 15vh;
  height: 15vh;
  background: #00bfff;
  margin-top: 20px;
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
