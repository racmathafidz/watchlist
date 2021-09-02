import axios from 'axios';

const Search = async (req, res) => {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${req.query.q}&page=1&include_adult=false`;

  const response = await axios.get(url);
  res.status(200).json({ data: response.data });
};

export default Search;
