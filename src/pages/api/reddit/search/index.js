import axios from "axios";

export default async function handler(req, res) {
    const { keyword } = req.body;
    const { type } = req.body;
    const { sort } = req.body;
    try {
        const searchRedditResponse = await axios.get(`https://www.reddit.com/search.json?q=${keyword}&type=${type}&sort=${sort}`,{
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
            }
        });
        const searchRedditResult = searchRedditResponse.data;
        res.status(200).json(searchRedditResult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}