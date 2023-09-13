// Importer le composant TaskLine depuis le fichier "../TaskLine/TaskLine"
import TaskLine from "../TaskLine/TaskLine";

// Créer un composant fonctionnel appelé TaskList, qui prend trois props : todolist, deleteTask, et priorTask
function TaskList({ todolist, deleteTask, priorTask }) {

  return (
    // Rendre un élément div avec les classes CSS "flex", "flex-col", "w-2/4", et "main-content"
    <div className="flex flex-col w-5/6 my-5 sm:w-2/4 xl:w-1/4 main-content">
      {/* Rendre un élément ul (liste non ordonnée) */}
      <ul>
        {/* Si la longueur de la todolist n'est pas égale à 0 */}
        {todolist.length !== 0 ? (
          <>
            {/* Trier le tableau todolist dans l'ordre décroissant en fonction de la propriété de priorité de chaque élément */}
            {todolist.sort((a, b) => b.priority - a.priority)
              // Mapper sur le tableau todolist trié et rendre un composant TaskLine pour chaque élément
              .map((item) => (
                <TaskLine
                  key={item.id}
                  itemData={item}
                  deleteTask={deleteTask}
                  priorTask={priorTask}
                />
              ))}
          </>
        ) : (
          // Si la longueur de la todolist est égale à 0, rendre un élément p (paragraphe) avec le texte "Rien à afficher ici..."
          <p>Rien à afficher ici...</p>
        )}
      </ul>
    </div>
  );
}

// Exporter le composant TaskList en tant qu'exportation par défaut de ce module
export default TaskList;