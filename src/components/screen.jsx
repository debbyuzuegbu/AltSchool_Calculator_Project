import React from "react";

const Screen = ({ result }) => {
  return (
    <div>
      <form>
        <input style={{marginRight: 10}} type="text" value={result} />
      </form>
    </div>
  );
};

export default Screen;
