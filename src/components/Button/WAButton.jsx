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
      className={`bg-green-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out animate-bounce fixed  bottom-5 right-5 shadow-md hover:animate-none ${
        isShow ? "block" : "hidden"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
    </a>
  );
}