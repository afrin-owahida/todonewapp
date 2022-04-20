import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { axiosWrapper } from "../utilities/axiosWrapper";
import { endpoint } from "../utilities/constants";
import Todo from "../components/Todo";
import TodoNew from "../components/TodoNew";

function HomePage() {
  const [needUpdate, setNeedUpdate] = useState(0); //(0) value 0 null na
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState({
    title: "",
  });
  useEffect(() => {
    axiosWrapper.get(endpoint.TODOS).then((res) => {
      setTodos(res.data.data);
      console.log(res.data);
    });
  }, [needUpdate]);
  function buttonHandler() {
    console.log(input);
    axiosWrapper
      .post(endpoint.CREATE_TODO, input)
      .then((res) => {
        setNeedUpdate(Math.random());
        window.alert("Success");
      })
      .catch((err) => {
        window.alert(err);
      });
  }
  return (
    <div className="bg-bg-secondary w-full min-h-screen flex justify-center">
      <div className="w-full bg-bg-primary m-24 p-12 rounded-lg">
        <div className="grid grid-cols-3 shadow-sm w-1/3 py-6">
          <div className="col-span-2">
            <CustomInput
              name="title"
              placeholder="ToDo"
              value={input}
              setValue={setInput}
            />
          </div>
          <div>
            <CustomButton title="New List" action={buttonHandler} />
          </div>
        </div>
        <p className="text-3xl">ToDo List </p>
        {todos.map(function (singleTodo, i) {
          // return <Todo todoObject={singleTodo} needUpdate={setNeedUpdate}/>;
          return <TodoNew todoObject={singleTodo} needUpdate={setNeedUpdate} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
