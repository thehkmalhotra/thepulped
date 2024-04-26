import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
  const { keyword } = req.query;

  try {
    const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}&type=sr&sort=relevance`);
    if (!response.ok) {
      throw new Error('Failed to fetch Reddit data');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Failed to fetch Reddit data:', error.message);
    res.status(500).json({ error: 'Failed to fetch Reddit data' });
  }
}
