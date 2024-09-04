import React from "react";
import Image from "../assets/logo-footer.png";
import Background from "../assets/pxfuel.jpg";

const Header = () => {
  return (
    <nav>
      <div
        className="w-full bg-cover bg-center"
        style={{
          height: "22rem",
          backgroundImage: "url(${Background})",
        }}
      >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <a href="#" className="flex items-center rtl:space-x-reverse">
              <img src={Image} className="size-40" alt="Gamedev" />
              <span className="self-center text-9xl font-semibold whitespace-nowrap text-neutral-400">
                Games4Broke
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
