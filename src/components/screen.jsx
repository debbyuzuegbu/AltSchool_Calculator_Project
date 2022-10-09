import React from "react";

const Screen = ({ result, Answer }) => {
  return (
    <div>
      <form>
        <input style={{marginRight: 10}} type="text" value={result} />
        <h1 style={{color: "white", textAlign: "right", marginRight: 10, fontWeight: 100, fontSize: 18}}>Ans: {Answer || 0}</h1>
      </form>
    </div>
  );
};

export default Screen;
