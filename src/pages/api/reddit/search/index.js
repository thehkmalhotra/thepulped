import axios from "axios";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { keyword } = req.body;
    const { type } = req.body;
    const { sort } = req.body;
    try {
        const searchRedditResponse = await axios.get(`https://www.reddit.com/search.json?q=${keyword}&type=${type}&sort=${sort}`);
        const searchRedditResult = searchRedditResponse.data;
        res.status(200).json(searchRedditResult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}