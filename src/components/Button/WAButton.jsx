import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function WAButton() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("section1");
      const { top } = about.getBoundingClientRect();
      setIsShow(top < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=6281323413143"
      target="_blank"
      className={` group bg-green-500 w-10 h-10  rounded-full flex justify-left items-center cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out animate-bounce fixed  bottom-5 right-5 shadow-md hover:animate-none ${
        isShow ? "block" : "hidden"
      }`}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl ms-[10px]" /> 
      <div className=" inline-block bg-green-500 opcacity-0 w-0 group-hover:opacity-100 rounded-l-full group-hover:-translate-x-40 group-hover:w-40 group-hover:px-[14px] py-1 transition-all duration-300 ease-in-out ">
        <span className="group-hover:opacity-100 opacity-0 text-white">081323413143</span>
      </div>
    </a>
  );
}