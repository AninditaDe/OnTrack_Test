import React from "react";
import { Button } from "react-bootstrap";

const ButtonComp = ({ name, clicked }) => {
  return (
    <div>
      <Button variant="btn btn-outline-light" onClick={clicked}>
        {name}
      </Button>
    </div>
  );
};

export default ButtonComp;
