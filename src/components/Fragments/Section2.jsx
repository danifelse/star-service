import { useEffect, useState } from "react";
import CardService from "../Card/CardService";
import { VscTools } from "react-icons/vsc";
import ServiceCarousels from "../Carousels/ServiceCarousels";

export default function Section2() {
    const [services, setServices] = useState([]);
    async function getServices() {
        try {
            const response = await fetch("/data/services.json");
            const data = await response.json();
            setServices(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getServices();
    }, []);
    console.log(services);

    return (
        <section id="section2" className="lg:pt-30 md:pt-20 pt-16 dark:bg-dark">
            <div className="container">
                <div className="px-4 flex flex-col lg:flex-row gap-4 lg:h-[600px] relative z-[0] ">
                    <div className= "w-full h-full lg:w-[25%] border border-gray-200 rounded-3xl grid place-items-center lg:place-items-start relative z-0 overflow-hidden">
                        <img src="./images/model-tr.png" 
                        className="aspect-[1/1] lg:aspect-[9/20] object-cover object-top" 
                        alt="model" />
                    </div>
                    <div className="w-full h-full lg:w-[75%] border border-gray-200 rounded-3xl p-4 relative z-10 ">
                        <div className="flex mb-2 ">
                            <div className=" me-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-80 inline-block px-4 py-2 rounded-xl">
                                <p className="text-white  text-lg">Layanan Kami <VscTools className="inline" /></p>
                            </div>
                            <div className="flex-1 flex justify-center items-center text-orange-600">
                                <hr className="bg-gradient-to-r from-orange-500 to-orange-600 w-full text-orange-600" />
                            </div>
                        </div>
                        <div className="z-10 lg:h-[530px] relative"
                         data-aos="fade-left"
                         data-aos-duration="1000">
                            <ServiceCarousels services={services} index={0} />
                        </div>
                        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-scroll lg:h-[530px]">
                            {services.map((service , index) => (
                                <CardService key={index} title={service.title} desc={service.desc} />
                            ))}
                        </div> */}

                    </div>
                 </div>
            </div>
        </section>
    );
}