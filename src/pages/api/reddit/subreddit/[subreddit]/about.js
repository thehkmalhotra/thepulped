import axios from "axios";

export default async function handler(req,res){
    const { subreddit } = req.query;
    const subredditAboutResponse = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
    const subredditAboutResult = subredditAboutResponse.data;
    res.status(200).json(subredditAboutResult);
}