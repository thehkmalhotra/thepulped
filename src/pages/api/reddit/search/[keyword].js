import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
  const { keyword } = req.query;
  const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}&type=sr&sort=relevance`);
  const data = await response.json();
  res.status(500).json(data);
}
