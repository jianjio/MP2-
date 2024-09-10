import React from "react";
import Image from "../assets/logo-footer.png";

const Header = () => {
  return (
    <nav>
      <div
        className=" w-full bg-cover bg-center"
        style={{
          height: "6.5rem",
        }}
      >
        <div className="flex items-center justify-center h-full w-full bg-slate-900 bg-opacity-70">
          <div className="text-center">
            <a href="/" className="flex items-center rtl:space-x-reverse">
              <img src={Image} className="size-20 fill-white" alt="Gamedev" />
              <span className="game self-center text-6xl  whitespace-nowrap text-white">
                GameDev
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
