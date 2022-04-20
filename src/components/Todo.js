import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { axiosWrapper } from "../utilities/axiosWrapper";
import { endpoint } from "../utilities/constants";

function Todo(props) {
  function inputButtonHandler() {
    axiosWrapper
      .post(endpoint.CREATE_SUBTASK, inputField)
      .then((res) => {
        props.needUpdate(Math.random());
      })
      .catch((err) => {
        window.alert(err);
      });
  }
  const [isShown, setIsShown] = useState(false);
  console.log(props.todoObject, "aaaa");
  const [inputField, setinputField] = useState({
    title: "",
    todo_id: props.todoObject.id,
  });
  function changeVisibility() {
    setIsShown(!isShown);
  }

  return (
    <div>
      <div className="bg-bg-secondary rounded-2xl" onClick={changeVisibility}>
        <div className="grid grid-cols-10 rounded-2xl gap-4 m-4">
          <div className="grid grid-rows gap-2 col-span-9 p-2">
            <p className="text-2xl">{props.todoObject.title}</p>
            <p className="text-xl">{props.todoObject.status}</p>
          </div>
          <div className="text-2xl p-6 flex justify-center">+</div>
        </div>
      </div>
      <div className="bg-bg-primary" hideen={!isShown}>
        <div className=" grid gap-2 px-4">
          {props.todoObject.subTasks.map(function (singleSubtask, i) {
            return <p>{singleSubtask.title}</p>;
          })}
          <div className="grid grid-cols-10">
            <div className="col-span-9">
              <CustomInput
                name="title"
                placeholder="What are the steps to complete this task?"
                value="inputField"
                setValue="setInputField"
              />
            </div>
            <CustomButton title="+" action={inputButtonHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
