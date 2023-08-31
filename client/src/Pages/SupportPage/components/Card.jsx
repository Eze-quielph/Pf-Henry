
export default function Card({title, description}) {


  return (
    <a
      href="#"
      className="h-50 w-full md:w-[250px] p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-200 dark:hover:bg-gray-200 "
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
}
