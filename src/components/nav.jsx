import React from "react";


const Nav = () => {
  let date = new Date();
  let time = date.getHours();
  let mins = date.getMinutes();

  return (
    <>
      <nav>
        <p style={{color: "white"}}>{time}:{mins}</p>
      </nav>
    </>
  );
};

export default Nav;
