export default function CardService({ title, desc}) {
    return (
        <div className="w-full h-[175px] ">
            <a href="#" className="block w-full h-full rounded-lg max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-transparent dark:hover:bg-gray-700">
                <h5 className="mb-2 text-normal lg:text-md font-bold tracking-tight text-gray-900 dark:text-white">📍 {title}</h5>
                <p className="font-normal text-sm lg:text-normal text-gray-700 dark:text-gray-400">{desc}</p>
            </a>
        </div>
    );
}