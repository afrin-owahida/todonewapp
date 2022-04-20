import React from "react";

function CustomButton(props) {
  return (
    <button class=" bg-btn-primary text-txt-secondary h-full w-full rounded" 

    onClick={props.action}
    >
      {props.title ? props.title : "Button"}
    </button>
  );
}

export default CustomButton;
