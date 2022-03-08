import React from "react";
import Button from "./Button";

const Header = ({title,onShow,showAdd}) => {
  

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="#ff0066" text={showAdd ? 'Close Task':'Add Task'} onClick={onShow}></Button>
    </header>
  );
};

export default Header;
