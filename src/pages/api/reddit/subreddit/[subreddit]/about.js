export default async function handler(req,res){
    const { subreddit } = req.query;
    const subredditAboutResponse = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`);
    const subredditAboutResult = await subredditAboutResponse.json();
    res.status(200).json({subreddit: subredditAboutResult});
}