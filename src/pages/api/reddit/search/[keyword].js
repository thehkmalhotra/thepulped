import axios from "axios";

export default async function handler(req, res) {
    const { keyword } = req.query;
    try {
        const searchRedditResponse = await axios.get(`https://www.reddit.com/search.json?q=${keyword}&type=sr`,{
            headers: {
                "User-Agent" : "Mozilla/5.0 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                "Referer" : "https://thepulped.vercel.app/dashboard/create-audience"
            }
        }
    );
        const searchRedditResult = searchRedditResponse.data;
        res.status(200).json(searchRedditResult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}