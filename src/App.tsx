import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Test } from "./components/Test";
import { Todolist } from "./components/Todolist";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [modifClic, setModifClic] = useState<boolean>(false);
  // state de lindex a editer
  const [modifIndex, setmodifIndex] = useState<number | null>(null);

  const deleteTask = (index: number) => {
    // console.log("index de cette ligne: ", index);
    const newTasks = tasks.filter((_task, i) => i !== index);
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
      <Button
        onClick={() => {
          const newToDo = [...tasks];
          newToDo.push(todo);
          setTasks(newToDo);
        }}
        label={"Ajouter"}
        backgroundColor={"pink"}
      />
      {modifClic && (
        <div>
          <Button
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
            label={"confirmer la modif"}
            backgroundColor={"salmon"}
          />
          <Input
            placeholder={`Éditer la tâche ${tasks[modifIndex || 0]}`}
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
    </div>
  );
}

export default App;
