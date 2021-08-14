import axios from "axios";

export const apiGame = async () => {
  const result = await axios.get(
    "https://api.rawg.io/api/games?key=732fa35be5764314aa4909f2324c26ac"
  );

  return result;
};
