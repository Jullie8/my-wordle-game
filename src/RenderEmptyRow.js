import React from "react";

const RenderEmptyRow = ({ rowIndex }) => {
  return (
    <div className="row" key={`row-${rowIndex}`}>
      {[...Array(5)].map((_, columnIndex) => {
        return (
          <div className="column" key={`column ${columnIndex}`}>
            &nbsp;
          </div>
        );
      })}
    </div>
  );
};

export default RenderEmptyRow;
