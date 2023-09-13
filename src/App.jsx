import { useState } from "react";
import { nanoid } from "nanoid";
import TaskList from "./TaskList/TaskList";
import AddForm from "./AddForm/AddForm";
import Title from "./Title/Title";

// Définir le composant principal App
function App() {
  // Définir les variables d'état
  const [todolist, setTodolist] = useState([]); // Variable d'état pour stocker la liste des tâches

  const [todo, setTodo] = useState(""); // Variable d'état pour stocker la tâche actuelle
  const [validateForm, setValidateForm] = useState(false); // Variable d'état pour suivre la validation du formulaire

  // Gérer la soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault(); // Empêcher la soumission du formulaire

    if (todo.length === 0) {
      setValidateForm(true); // Si la tâche est vide, définir le drapeau de validation sur true
    }

    if (todo.length > 0) {
      setValidateForm(false); // Réinitialiser le drapeau de validation si la tâche n'est pas vide
      setTodolist([
        ...todolist, // Étendre la liste des tâches existante
        {
          id: nanoid(), // Générer un identifiant unique pour la nouvelle tâche
          content: todo, // Définir le contenu de la nouvelle tâche
          priority: false, // Définir le drapeau de priorité de la nouvelle tâche sur false
        },
      ]);
      setTodo(""); // Effacer le champ de saisie de la tâche actuelle
    }
  }

  // Gérer le basculement de la priorité d'une tâche
  function priorTask(id) {
    setTodolist(todolist.map((item) => {
      if (item.id === id) {
        item.priority = !item.priority; // Inverser le drapeau de priorité de la tâche
      }
      return item;
    }));
  }

  // Gérer la suppression d'une tâche
  function deleteTask(id) {
    setTodolist(todolist.filter((item) => item.id !== id)); // Filtrer la tâche avec l'ID spécifié
  }

  // Rendre le composant App
  return (
    <div className="flex flex-col items-center w-full h-screen text-white main-content bg-indigo-950 ">
      <Title />
      <AddForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} validateForm={validateForm} />
      <TaskList todolist={todolist} deleteTask={deleteTask} priorTask={priorTask} />
    </div>
  );
}

export default App; // Exporter le composant App comme exportation par défaut