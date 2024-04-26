import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
  const { keyword } = req.query;
  res.status(200).json(keyword);
}
