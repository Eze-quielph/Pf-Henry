export default function SearchBar() {
  return (
    <form className="content-center mx-auto pt-40 px-6 sm:w-6/12">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-white-900 sr-only dark:text-black"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-white-500 dark:text-white-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-white-900 border border-white-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="¿Cómo te podemos ayudar?"
          required
        />
        <button
          type="submit"
          className="text-black absolute right-2.5 bottom-2.5 bg-lime-900 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800"
        >
          Búsqueda
        </button>
      </div>
    </form>
  );
}
