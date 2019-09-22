import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Box = styled.div`
  width: 12vh;
  height: 12vh;
  background: ${props => (props.isDragging ? "#00bfff6b" : "#00bfff")};
  margin-top: 20px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  display: flex;
  @media (max-width: 768px) {
    width: 10vh;
    height: 10vh;
  margin-left: 20px;

  }
`;
const Clone = styled(Box)`
  ~ div {
    transform: none !important;
  }
`;

export default class NumberBoxes extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.number} index={this.props.index}>
        {(provided, snapshot) => (
          <>
            <Box
              className="box"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.number}
            </Box>
            {snapshot.isDragging && <Clone>{this.props.number}</Clone>}
          </>
        )}
      </Draggable>
    );
  }
}
