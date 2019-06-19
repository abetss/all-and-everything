import React from "react";

export const Notes = (terms: any, selectedId: number) => {
  let selectedNote = terms[selectedId];
  console.log(selectedNote);
  return (
    <div>
      <p>{selectedNote}</p>
    </div>
  );
};
