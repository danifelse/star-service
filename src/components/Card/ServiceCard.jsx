export default function ServiceCard({ title, desc, img }) {
    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 mb-4">
            <div>
                <div className="px-4 pt-4">
                    <img class="rounded-t-lg aspect-[3/2] object-cover" src={img} alt="images" />
                </div>
            </div>
            <div class="px-4 pt-2">
                <a href="#">
                    <h5 class="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{desc}</p>
            </div>
        </div>
    )
}