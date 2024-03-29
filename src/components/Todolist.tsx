import { Button } from "./Button";

import { TodolistProps } from "../interface/types";

export const Todolist = (props: TodolistProps) => {
  const newTasks = props.tasks;
  return (
    <>
      <ul>
        {newTasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button
              onClick={() => {
                props.IdTask(index);
              }}
              label={"Delete truk"}
              backgroundColor={"grey"}
            />
            <Button
              onClick={() => {
                props.TaskInfo(task, index);
              }}
              label={"Edit truk"}
              backgroundColor={"green"}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
