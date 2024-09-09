import React, { useState, useEffect } from "react";

const API_KEY = "eca1efd2c9msh6f47c703a1a5ff2p19aa90jsn3341ebea3870";
const API_HOST = "free-to-play-games-database.p.rapidapi.com";

const getGames = async (category = "") => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };

  let url = `https://${API_HOST}/api/games`;
  if (category && category !== "all") {
    url += `?category=${category}`;
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.slice();
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

const GameCard = ({ game }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="border-slate-900 border-4 bg-[#53212B] bg-opacity-70 text-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <img
        src={game.thumbnail}
        className="w-full h-48 object-cover"
        alt={game.title}
      />
      <div className="p-4 flex-grow">
        <h5 className="text-xl font-bold mb-2">{game.title}</h5>
        <p className="text-white-700 mb-4">{game.short_description}</p>
        <a
          href={game.game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BD3944] hover:bg-[#E57044] text-white font-bold py-2 px-4 rounded"
        >
          Download
        </a>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Genre:</strong> {game.genre}
          </li>
          <li>
            <strong>Platform:</strong> {game.platform}
          </li>
          <li>
            <strong>Release Date:</strong> {game.release_date}
          </li>
        </ul>
      </div>
      <div className="p-4 bg-[#D1BDC6]">
        <a
          href={game.freetogame_profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BD3944] hover:bg-[#E57044] text-white font-bold py-1 px-2 rounded text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  </div>
);

const App = () => {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("moba");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      const fetchedGames = await getGames(category);
      setGames(fetchedGames);
    };
    fetchGames();
  }, [category]);

  const filterGames = (games, searchTerm) => {
    return games.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const displayedGames = filterGames(games, searchTerm);

  return (
    <div className="cat container mx-auto px-4">
      <nav className="mb-4 bg-slate-900 bg-opacity-70">
        <div className="flex items-center max-w-md mx-auto shadow rounded border-0 p-3">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="flex-grow py-4 p-9 w-96 font-bold text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        <ul className="py-4 grid grid-cols-4 gap-4">
          {[
            "all",
            "moba",
            "mmorpg",
            "shooter",
            "strategy",
            "anime",
            "battle-royale",
            "sci-fi",
            "racing",
            "sandbox",
            "open-world",
            "survival",
          ].map((cat) => (
            <li className="-mb-px " key={cat}>
              <button
                className={`text-white inline-block py-2 px-4 font-semibold ${
                  category === cat ? "" : " hover:bg-[#E57044]"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-wrap -mx-4" id="gamesList">
        {displayedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;
