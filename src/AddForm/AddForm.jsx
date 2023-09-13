
function AddForm({ handleSubmit, todo, setTodo, validateForm }) {

  return (
    <form onSubmit={handleSubmit} className="w-5/6 my-5 sm:w-2/4 xl:w-1/4">
      <div className="relative ">
        <label htmlFor="name-with-label" className="text-white-700">
          Tâche
        </label>
        <input type="text" id="name-with-label" placeholder="Tâche à ajouter" value={todo} onChange={e => setTodo(e.target.value)} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
        {validateForm && <p className="text-red-500">Merci d'ajouter une tâche avant validation</p>}
      </div>
      <button type="submit" className="w-2/4 px-2 py-2 my-4 text-base font-semibold text-center text-black transition duration-200 ease-in bg-white rounded-lg shadow-md lg:w-1/4 hover:bg-gray-300" >
        Ajouter
      </button>
    </form>
  );
}
export default AddForm;

