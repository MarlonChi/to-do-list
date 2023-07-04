import { ITask } from "../../interfaces/Task";

import "./TaskList.scss";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

export const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
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
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};
