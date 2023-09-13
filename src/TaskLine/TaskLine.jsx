function TaskLine({ itemData, deleteTask, priorTask }) {
  return (
    // Début de l'élément de liste

    <li className={` flex items-center justify-between w-full px-6 py-2 my-2  rounded-lg shadow-lg 
    ${itemData.priority ? " bg-red-200" : "bg-white"}`}>
      <div className="flex w-5/6 gap-x-4">
        {/* Affiche un bouton de modification de la priorité de la tâche */}
        <button onClick={() => priorTask(itemData.id)}>
          {itemData.priority ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#F44336" d="M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18C25.3,46.4,22.7,46.4,21.2,44.8z"></path><path fill="#FFF" d="M21.6,32.7c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.2,1-0.2s0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,0.9s-0.1,0.6-0.2,0.9s-0.3,0.5-0.5,0.7c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.6,0.2-1,0.2s-0.7-0.1-1-0.2s-0.5-0.3-0.8-0.5c-0.2-0.2-0.4-0.4-0.5-0.7S21.6,33.1,21.6,32.7z M25.8,28.1h-3.6L21.7,13h4.6L25.8,28.1z"></path>
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 80 80">
            <path fill="#bae0bd" d="M40,77.5c-1.318,0-2.558-0.514-3.49-1.446L3.946,43.49C3.014,42.558,2.5,41.318,2.5,40 s0.514-2.558,1.446-3.49L36.51,3.946C37.442,3.014,38.682,2.5,40,2.5s2.558,0.514,3.49,1.446L76.054,36.51 C76.986,37.442,77.5,38.682,77.5,40s-0.514,2.558-1.446,3.49L43.49,76.054C42.558,76.986,41.318,77.5,40,77.5z"></path><path fill="#5e9c76" d="M40,3c1.185,0,2.299,0.461,3.137,1.299l32.564,32.564c1.73,1.73,1.73,4.544,0,6.274L43.137,75.701 C42.299,76.539,41.185,77,40,77s-2.299-0.461-3.137-1.299L4.299,43.137c-1.73-1.73-1.73-4.544,0-6.274L36.863,4.299 C37.701,3.461,38.815,3,40,3 M40,2c-1.391,0-2.783,0.531-3.844,1.592L3.592,36.156c-2.123,2.123-2.123,5.565,0,7.688 l32.564,32.564C37.217,77.469,38.609,78,40,78s2.783-0.531,3.844-1.592l32.564-32.564c2.123-2.123,2.123-5.565,0-7.688 L43.844,3.592C42.783,2.531,41.391,2,40,2L40,2z"></path><g><path fill="#45805b" d="M42 48L42 20 38 20 38 48 28 48 40 60 52 48z"></path></g>
          </svg>
          }
        </button>
        {/* Affiche le contenu de la tâche */}
        <p className="overflow-hidden text-sm text-gray-700 text-ellipsis ">
          {itemData.content}
        </p>
      </div>
      {/* Affiche un bouton de suppression */}

      <button onClick={() => deleteTask(itemData.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
          <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
        </svg>
      </button>
    </li>

  );
}

export default TaskLine;
