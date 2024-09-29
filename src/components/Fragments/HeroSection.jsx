import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import TypeIt from "typeit-react";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import animationAOS from "../../AOS/setting";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function HeroSection() {
  useEffect(() => {
    animationAOS();
  });
  return (
    <section id="home" className="lg:pt-36 md:pt-20 pt-16 dark:bg-dark ">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse">
          <div className="w-full self-center px-4 lg:w-1/2 relative">
            <div className="flex justify-end">
              <h1 className="text-end lg:text-6xl text-2xl py-2 font-extrabold bg-gradient-to-r from-orange-600 to-red-700 hover:opacity-80 inline-block text-transparent bg-clip-text">
                Star Service
              </h1>
            </div>
            <h1 className="block font-bold text-2xl md:text-3xl text-dark dark:text-white lg:text-4xl mt-4 text-end">
              <TypeIt
                options={{
                  speed: 100,
                  direction: "left",
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Perbaik1*gadgetmu")
                    .pause(750)
                    .move(-8)
                    .pause(200)
                    .delete(2)
                    .pause(200)
                    .type(" ")
                    .move(8)
                    .type("di sini")
                    .move(-7)
                    .pause(200)
                    .type(" ")
                    .move(7)
                    .pause(750);
                  return instance;
                }}
              />
            </h1>

            <h2 className="font-medium text-end text-secondary text-lg mb-5 lg:text-2xl mt-2">
              <TypeIt
                options={{ loop: true, direction: "left" }}
                getBeforeInit={(instance) => {
                  instance
                    .pause(5000)
                    .type("Bonding LCD")
                    .pause(250)
                    .delete(11)
                    .pause(200)
                    .type("Ganti flexible Samsung Z fold dan Z Flip")
                    .pause(250)
                    .delete(40)
                    .pause(200)
                    .type("Ganti Kaca")
                    .pause(250)
                    .delete(10)
                    .pause(200)
                    .type("Mati Total")
                    .pause(9);
                  return instance;
                }}
              />
            </h2>
            <hr className=" border-t-4 mb-5" />
            <div className="flex justify-end mb-4 mt-5 px-1 cursor-pointer">
              <a
                href="https://api.whatsapp.com/send?phone=6281323413143"
                target="_blank"
                className="text-orange-700 group hover:text-orange-900 transition-all duration-500"
              >
                <FaWhatsapp className="inline-block h-6 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
              <a
                href="https://www.instagram.com/starservice_itcroxy/"
                target="_blank"
                className="text-orange-700 group hover:text-orange-900 transition-all duration-500"
              >
                <FaInstagram className="inline-block h-6 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
              <a
                href="http://tiktok.com/@starservice_itcroxy"
                target="_blank"
                className="text-orange-700 group hover:text-orange-900 transition-all duration-500"
              >
                <FaTiktok className="inline-block h-5 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
              <a
                href="https://maps.app.goo.gl/CxNwiQ5ZQkdZkG3r5"
                target="_blank"
                className="text-orange-700 group hover:text-orange-900 transition-all duration-500"
              >
                <FaLocationDot className="inline-block h-6 w-6 me-2 group-hover:-translate-y-4 transition-all duration-500" />
              </a>
            </div>
            <div className="flex justify-end">
            <a href="https://api.whatsapp.com/send?phone=6281323413143" target="_blank" className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-red-800 hover:to-orange-800 text-white font-bold py-2 px-4 rounded-full">
            Hubungi Kami
          </a>
            </div>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2  rounded-3xl flex justify-center">
            <div className="w-full md:w-[80%] rounded-b-[20%] overflow-hidden mt-10 lg:m-5"
                data-aos="zoom-in">
              <img
                src="./images/teknisi-nobg.png"
                alt="Smartphone Repair"
                className="w-full mx-auto mb-0 relative z-10  object-cover"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 opacity-50 md:scale-125 ">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1500"
                >
                  <path
                    fill="#0369a1"
                    d="M46.5,-47.8C53.7,-39.4,48.3,-19.7,45.4,-2.8C42.6,14.1,42.5,28.2,35.3,33.9C28.2,39.7,14.1,37.1,-3.8,40.9C-21.7,44.7,-43.4,54.9,-55.1,49.2C-66.8,43.4,-68.4,21.7,-60.4,8C-52.4,-5.7,-34.7,-11.4,-23.1,-19.7C-11.4,-28.1,-5.7,-39.1,7,-46.1C19.7,-53.1,39.4,-56.1,46.5,-47.8Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out animate-bounce"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("section1").offsetTop,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faArrowDown} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}