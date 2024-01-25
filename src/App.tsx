import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Test } from "./components/Test";
import { Todolist } from "./components/Todolist";
import { useState } from "react";
import { EditInput } from "./components/EditInput";
import { EditButton } from "./components/EditButton";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [modifClic, setModifClic] = useState<boolean>(false);
  // state de lindex a editer
  const [modifIndex, setmodifIndex] = useState<number | null>(null);

  const deleteTask = (index: number) => {
    // console.log("index de cette ligne: ", index);
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const editTaskInfo = (task: string, index: number) => {
    // console.log("Edit task - Index:", index, "Task:", task);
    // quand edit est clicked
    setModifClic(true);
    // stockage de lindex
    setmodifIndex(index);
  };

  return (
    <div>
      <Test title="To Do List" text="Mes trucs à faire" />

      <Input
        placeholder="Ajouter une tâche"
        name="task"
        onTaskChange={(task) => {
          setTodo(task);
        }}
      />
      {modifClic && (
        <div>
          <EditButton
            onClick={() => {
              // si ya un index à edit
              if (modifIndex !== null) {
                // crée une copie du tableau task
                const updatedTasks = [...tasks];
                // update task index (editingIndex) avec la new valeur de todo
                updatedTasks[modifIndex] = todo;
                // update l'array de tasks
                setTasks(updatedTasks);
                // reset a false pour virer le edit button + edit input
                setModifClic(false);
                // reset a null pour vider le state de lindex a editer
                setmodifIndex(null);
                // reset de la value de todo à 'rien' apres avoir edité
                setTodo("");
              }
            }}
            label={"confirmer"}
            backgroundColor={"salmon"}
          />
          <EditInput
            placeholder="Editer une tâche"
            name="task"
            onTaskChange={(task) => {
              setTodo(task);
            }}
          />
        </div>
      )}

      <Todolist
        tasks={tasks}
        IdTask={deleteTask}
        TaskInfo={(task, index) => editTaskInfo(task, index)}
      />
      <Button
        onClick={() => {
          const newToDo = [...tasks];
          newToDo.push(todo);
          setTasks(newToDo);
        }}
        label={"Ajouter"}
        backgroundColor={"pink"}
      />
    </div>
  );
}

export default App;
