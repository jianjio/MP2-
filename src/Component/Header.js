import React from "react";
import Image from "../assets/logo-footer.png";

const Header = () => {
  return (
    <nav className="bg-inherit sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <a href="#" className="flex items-center rtl:space-x-reverse">
          <img src={Image} className="h-20" alt="Gamedev" />
          <span className="self-center text-5xl font-semibold whitespace-nowrap text-slate-900">
            DefinitelyFreeGames
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
