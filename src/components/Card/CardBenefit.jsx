export default function CardBenefit({ title, desc , img}) {
    return (
        <div className=" md:w-[40%] flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow md:flex-row-reverse md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full md:w-[30%] rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-e-lg" src={img} alt="image-card" />
            <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-[70%]">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            </div>
        </div>
    )
}