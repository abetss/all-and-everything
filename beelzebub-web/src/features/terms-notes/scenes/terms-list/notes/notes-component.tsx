import React from "react";

export const Notes = (selectedId: any) => {
  return (
    <div>
      <p>{selectedId.selectedId.note}</p>
      <p>Reference page: {selectedId.selectedId.page}</p>
    </div>
  );
};
