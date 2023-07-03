import React from "react";
import { ITask } from "../../interfaces/Task";

import "./TaskList.scss";

interface Props {
  taskList: ITask[];
}

export const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className="Task" key={task.id}>
            <div className="Task__details">
              <h4>{task.title}</h4>
              <p>Prioridade: {task.priority}</p>
            </div>
            <div className="Task__actions">
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};
