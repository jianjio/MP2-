const Footer = () => {
  return (
    <footer className="bg-slate-800 sticky bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Nieves & Tiotangco
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Youtube
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
