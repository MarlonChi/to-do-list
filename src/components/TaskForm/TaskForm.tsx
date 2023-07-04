import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ITask } from "../../interfaces/Task";

import "./TaskForm.scss";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, priority: number): void;
}

export const TaskForm = ({
  btnText,
  taskList,
  task,
  setTaskList,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setPriority(task.priority);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, priority);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, priority };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setPriority(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setPriority(parseInt(e.target.value));
    }
  };

  return (
    <form className="TaskForm" onSubmit={addTaskHandler}>
      <div className="TaskForm__inputContainer">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
          required
        />
      </div>
      <div className="TaskForm__inputContainer">
        <label htmlFor="priority">Prioridade:</label>
        <input
          type="text"
          name="priority"
          placeholder="Prioridade da tarefa"
          onChange={handleChange}
          value={priority}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};
