import "./index.css";

export default function FloatingBackgrund({ children }) {
  return (
    <div className="relative">
      <section className="bg">
        <ul className="shape">
          <li>
            <img src="icons/obeng.png" alt="" />
          </li>
          <li>
           <img src="icons/obeng.png" alt="" />
          </li>
          <li>
            <img src="icons/pillers.png" alt="" />
          </li>
          <li>
            <img src="icons/solder.png" alt="" />
          </li>
          <li>
            <img src="icons/obeng.png" alt="" />
          </li>
          <li>
            <img src="icons/solder.png" alt="" />
          </li>
          <li>
            <img src="icons/solder.png" alt="" />
          </li>
          <li>
            <img src="icons/pillers.png" alt="" />
          </li>
        </ul>
      </section>
      {children}
    </div>
  );
}