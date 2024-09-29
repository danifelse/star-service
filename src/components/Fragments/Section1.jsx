export default function Section1() {
    return (
        <section id="section1" className="lg:pt-30 md:pt-20 pt-16 dark:bg-dark ">
            <div className="container">
                <div className="px-4">
                <h1 className="md:text-3xl text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-700 hover:opacity-80 inline-block text-transparent bg-clip-text">Perbaikan Smartphone</h1>
                    <div className="bg-orange-100 dark:bg-slate-800 lg:h-[250px] mt-10 p-8 rounded-3xl flex flex-col lg:flex-row items-center">
                        <div className=" w-full lg:ps-6 lg:w-[55%]">
                            <p className="text-gray-500 dark:text-slate-300 leading-relaxed text-md md:text-lg lg:text-xl">Punya smartphone pasti nggak bisa lepas, kan? Dia update kamu sama berita, nyambungin ke orang penting, simpen foto favorit, dan bantu kamu ke tujuan. Kalau rusak, pasti pengen cepet benerin. Tenang, teknisi kita jago benerin berbagai model, jadi ponselmu bakal balik ke tanganmu dalam waktu singkat!</p>
                        </div>
                        <div className="w-full lg:w-[45%] hidden lg:block flex justify-center items-center">
                            <img src="./images/repair-tr.png"
                             alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full lg:hidden flex justify-center items-center">
                            <img src="./images/repair-tr.png"
                             alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}