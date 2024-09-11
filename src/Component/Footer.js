const Footer = () => {
  return (
    <footer className="bg-slate-800 justify-center ">
      <ul className="flex flex-wrap justify-center items-center mt-3 pt-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.dev/jianjio/MP2-"
            target="_blank"
            className="hover:underline= me-4 md:me-6"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=nDUvpvK3a0M"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <i className="fa-brands fa-youtube fa-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/brokodokasd"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Jiotiotangco"
            target="_blank"
            className="hover:underline"
          >
            <i className="fa-brands fa-twitter fa-2xl"></i>
          </a>
        </li>
      </ul>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://www.facebook.com/EkkoE2k01"
            target="_blank"
            className="hover:underline"
          >
            Nieves & Tiotangco
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
