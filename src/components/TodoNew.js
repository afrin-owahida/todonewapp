import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { axiosWrapper } from "../utilities/axiosWrapper";
import { endpoint } from "../utilities/constants";

function TodoNew(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [inputField, setInputField] = useState({
    title: "",
    todo_id: props.todoObject.id,
  });
  function changeVisibility() {
    setIsHidden(!isHidden);
  }
  function addButtonHandler() {
    axiosWrapper
      .post(endpoint.CREATE_SUBTASK, inputField)
      .then((res) => {
        props.needUpdate(Math.random);
      })
      .catch((err) => {
        window.alert(err);
      });
  }
  return (
    <div className="w-full">
      <div className="grid grid-cols-10 gap-2 rounded-xl bg-bg-dark my-4">
        <div
          className="grid col-span-9 grid-rows-2 p-4 text-xl"
          onClick={changeVisibility}
        >
          <p className="">{props.todoObject.title}</p>
          <p className="">{props.todoObject.title}</p>
        </div>
        <p className="flex justify-center text-2xl p-6 m-2 rounded-full bg-bg-secondary">+</p>
      </div>
      <div className="bg-bg-secondary rounded-xl p-4 text-xl" hidden={isHidden}>
        {props.todoObject.subTasks.map(function (singleSubtask, i) {
          return <p>{singleSubtask.title}</p>;
        })}
        <div className="grid grid-cols-10 shadow-md">
          <div className="col-span-8">
            <CustomInput
              placeholder="What are the steps to complete the task"
              name="title"
              value={inputField}
              setValue={setInputField}
            />
          </div>
          <div className="col-span-2">
            <CustomButton title="Add New Step" action={addButtonHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoNew;
