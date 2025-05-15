module.exports = {
  getGames: async (req, res) => {
    res.status(200).json("getGames method");
  },
  getGame: async (req, res) => {
    res.status(200).json("getGame method");
  },
  searchGames: async (req, res) => {
    res.status(200).json("searchGames method");
  },
  addGame: async (req, res) => {
    res.status(200).json("addGame method");
  },
  updateGame: async (req, res) => {
    res.status(200).json("updateGame method");
  },
  deleteGame: async (req, res) => {
    res.status(200).json("deleteGame method");
  },
};
