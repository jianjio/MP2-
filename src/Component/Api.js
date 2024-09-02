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
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

const GameCard = ({ game }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="bg-[#53212B] text-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
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
  const [category, setCategory] = useState("");
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
      <nav className="mb-4">
        <ul className="flex border-b">
          {["all", "mmorpg", "shooter", "strategy", "moba"].map((cat) => (
            <li className="-mb-px mr-1" key={cat}>
              <button
                className={`text-white inline-block py-2 px-4 font-semibold ${
                  category === cat
                    ? "border-l border-t border-r rounded-t text-blue-700"
                    : "bg-[#BD3944] hover:bg-[#E57044]"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded bg-black text-white"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap -mx-4" id="gamesList">
        {displayedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;
