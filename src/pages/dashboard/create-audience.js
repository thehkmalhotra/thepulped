import AudienceCard from "@/components/AudienceCard";
import Header from "@/components/Header";
import RedditCard from "@/components/RedditCard";
import { SearchContext } from "@/context/SearchContext";
import axios from "axios";
import { useContext, useState } from "react";

const CreateAudience = () => {
    const SearchData = useContext(SearchContext);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [loaderStatus, setLoaderStatus] = useState(false);
    const [redditSearchStatus, setRedditSearchStatus] = useState(false);
    const [addRedditKeywordStatus, setAddRedditKeywordStatus] = useState(false);

    async function handleSearch(event) {
        event.preventDefault();
        setLoaderStatus(true);
        const searchRedditResponse = await axios.get(`https://www.reddit.com/search.json?q=${searchKeyword}&type=sr&sort=relevance`);
        const searchRedditResult = searchRedditResponse.data;
        SearchData.setSearchData([{ searchKeyword: searchKeyword, subReddits: searchRedditResult.data.children }]);
        setLoaderStatus(false);
        setRedditSearchStatus(true);
    }

    function handleAddKeyword() {
        setAddRedditKeywordStatus(true);
    }

    async function handleAddNewKeyWordSearch(event) {
        if (event.key === "Enter") {
            const searchRedditResponse = await axios.get(`https://www.reddit.com/search.json?q=${event.target.value}&type=sr&sort=relevance`);
            const searchRedditResult = searchRedditResponse.data;
            const newSearchData = [...SearchData.searchData, { searchKeyword: event.target.value, subReddits: searchRedditResult.data.children }];
            SearchData.setSearchData(newSearchData);
            setAddRedditKeywordStatus(false);
        }
    }

    function handleRemoveSearchKeyword(event) {
        const searchKeyword = event.target.getAttribute("data-keyword");
        const filteredNewData = SearchData.searchData.filter((searchData) => {
            return searchData.searchKeyword != searchKeyword;
        })
        SearchData.setSearchData(filteredNewData)
    }

    console.log(SearchData.searchData);

    return (
        <>
            <div className="main">
                <Header></Header>
                <h1>Hardik</h1>
                <div className="body">
                    <div className={"create-audience-initial-state" + (loaderStatus ? " disable" : "") + (redditSearchStatus ? " disable" : "")}>
                        <div className="create-audience">
                            <div className="header">
                                <h2>Create custom audience</h2>
                                <p>We recommend using your work email — it keeps work and life separate.</p>
                            </div>
                            <form onSubmit={handleSearch}>
                                <label>
                                    Reddit Keyword
                                    <div>
                                        <input type="text" name="search" placeholder="Pick a keyword, like “Digital Marketers” or “Movie-Goers”" onChange={(event) => setSearchKeyword(event.target.value)} />
                                        <button>
                                            <svg width="20" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1747 0C20.6975 0 25.1747 4.71279 25.1747 10.5263C25.1747 14.5795 22.9984 18.0976 19.8088 19.8565L24.0379 24.0924C24.238 24.2928 24.2458 24.6259 24.0555 24.8365C23.9611 24.9409 23.8302 25 23.6932 25H20.9921C20.6713 25 20.3628 24.8702 20.1304 24.6374L16.4647 20.9658C16.0424 21.0231 15.6118 21.0526 15.1747 21.0526H10.1747C4.65183 21.0526 0.174683 16.3398 0.174683 10.5263C0.174683 4.71279 4.65183 0 10.1747 0H15.1747ZM15.1747 2.63158H10.1747C6.03255 2.63158 2.67468 6.16617 2.67468 10.5263C2.67468 14.8865 6.03255 18.4211 10.1747 18.4211H15.1747C19.3168 18.4211 22.6747 14.8865 22.6747 10.5263C22.6747 6.16617 19.3168 2.63158 15.1747 2.63158Z"
                                                    fill="#7B7B7B" />
                                            </svg>
                                        </button>
                                    </div>
                                </label>
                            </form>
                        </div>
                        <div className="divider">
                            <hr />
                            <p>or pick curated audience to get started</p>
                            <hr />
                        </div>
                        <div className="curated-audiences">
                            <div className="audiences">
                                <label>
                                    <input type="radio" name="subreddits" />
                                    <AudienceCard />
                                </label>
                                <label>
                                    <input type="radio" name="subreddits" />
                                    <AudienceCard />
                                </label>
                                <label>
                                    <input type="radio" name="subreddits" />
                                    <AudienceCard />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={"create-audience-end-state" + (redditSearchStatus ? " active" : "")}>
                        <div className="create-audience">
                            <div className="header">
                                <h2>Create custom audience</h2>
                                <p>We recommend using your work email — it keeps work and life separate.</p>
                            </div>
                            <label>
                                Reddit Keyword
                                <div>
                                    <div className="keywords-container">
                                        <div className="keywords">
                                            {SearchData.searchData.map((data, index) => {
                                                return (
                                                    <div className="keyword" key={index}>
                                                        <div>
                                                            <p>{data.searchKeyword}</p>
                                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-keyword={data.searchKeyword} onClick={handleRemoveSearchKeyword}>
                                                                <path d="M1 4H13" stroke="#FF4D58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M11.6668 4.00016V13.3335C11.6668 13.6871 11.5264 14.0263 11.2763 14.2763C11.0263 14.5264 10.6871 14.6668 10.3335 14.6668H3.66683C3.31321 14.6668 2.97407 14.5264 2.72402 14.2763C2.47397 14.0263 2.3335 13.6871 2.3335 13.3335V4.00016M4.3335 4.00016V2.66683C4.3335 2.31321 4.47397 1.97407 4.72402 1.72402C4.97407 1.47397 5.31321 1.3335 5.66683 1.3335H8.3335C8.68712 1.3335 9.02626 1.47397 9.27631 1.72402C9.52635 1.97407 9.66683 2.31321 9.66683 2.66683V4.00016" stroke="#FF4D58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {
                                            addRedditKeywordStatus ?
                                                <form onSubmit={(event) => event.preventDefault()}>
                                                    <input type="text" name="keyword" placeholder="New Keyword" onKeyDown={handleAddNewKeyWordSearch} />
                                                </form>
                                                : ""
                                        }
                                        {
                                            addRedditKeywordStatus ? ""
                                                :
                                                <div className="add-keyword" onClick={handleAddKeyword}>
                                                    <svg width="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.666667 7.17949H5.33333V12.2051C5.33333 12.3955 5.40357 12.5782 5.52859 12.7128C5.65362 12.8474 5.82319 12.9231 6 12.9231C6.17681 12.9231 6.34638 12.8474 6.47141 12.7128C6.59643 12.5782 6.66667 12.3955 6.66667 12.2051V7.17949H11.3333C11.5101 7.17949 11.6797 7.10385 11.8047 6.96921C11.9298 6.83456 12 6.65195 12 6.46154C12 6.27113 11.9298 6.08851 11.8047 5.95387C11.6797 5.81923 11.5101 5.74359 11.3333 5.74359H6.66667V0.717949C6.66667 0.527537 6.59643 0.344924 6.47141 0.210282C6.34638 0.0756409 6.17681 0 6 0C5.82319 0 5.65362 0.0756409 5.52859 0.210282C5.40357 0.344924 5.33333 0.527537 5.33333 0.717949V5.74359H0.666667C0.489856 5.74359 0.320287 5.81923 0.195262 5.95387C0.070238 6.08851 0 6.27113 0 6.46154C0 6.65195 0.070238 6.83456 0.195262 6.96921C0.320287 7.10385 0.489856 7.17949 0.666667 7.17949Z" fill="#212121" />
                                                    </svg>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="curated-audiences">
                            <h4>Subreddit Results</h4>
                            {SearchData.searchData.map((redditData, redditIndex) => (
                                <div className="audiences" key={redditIndex}>
                                    {redditData.subReddits.map((subreddit, subredditIndex) => (
                                        <label key={subredditIndex}>
                                            <input type="radio" name="subreddit" />
                                            <RedditCard name={subreddit.data.display_name} bio={subreddit.data.public_description} icon={subreddit.data.icon_img === "" ? (subreddit.data.community_icon ? subreddit.data.community_icon.split("?")[0] : "Placeholder") : subreddit.data.icon_img} members={subreddit.data.subscribers >= 1000 ? (subreddit.data.subscribers / 1000).toFixed(1) + "K members" : subreddit.data.subscribers >= 1000000 ? (subreddit.data.subscribers / 1000000).toFixed(1) + "M members" : (subreddit.data.subscribers) + " members"} key={subredditIndex} />
                                        </label>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"loader" + (loaderStatus ? " active" : "")}>
                        <h1>Loading Subreddits</h1>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .create-audience-initial-state,
                .create-audience-end-state {
                    display: flex;
                    flex-direction: column;
                }

                .create-audience-initial-state.disable {
                    display: none;
                }

                .create-audience {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }
                
                .create-audience .header {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                
                .create-audience .header h2 {
                    font-family: "Ahrefs";
                    font-size: 22px;
                }
                
                .create-audience .header p {
                    font-family: "Ahrefs";
                    color: #919191;
                }
                
                .create-audience form {
                    width: 100%;
                }
                
                .create-audience form label {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-family: "Ahrefs";
                    font-weight: 900;
                }
                
                .create-audience form label div {
                    position: relative;
                }
                
                .create-audience form input {
                    background-color: #F9F9F9;
                    width: 100%;
                    height: 50px;
                    border: none;
                    outline: none;
                    padding: 0 50px 0 20px;
                    border: solid 1px #E5E5E5;
                    border-radius: 12px;
                    font-family: "Ahrefs";
                    font-size: 15px;
                    font-weight: 100;
                    color: #212121;
                }
                
                .create-audience form input::placeholder {
                    color: #919191;
                }

                .create-audience-end-state {
                    display: none;
                }

                .create-audience-end-state.active {
                    display: flex;
                }

                .keywords-container {
                    background-color: #F9F9F9;
                    width: 100%;
                    height: 50px;
                    padding: 0 5px;
                    border: none;
                    outline: none;
                    border: solid 1px #E5E5E5;
                    border-radius: 12px;
                    font-family: "Ahrefs";
                    font-size: 15px;
                    font-weight: 100;
                    color: #707070;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .keywords {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    height: 100%;
                }

                .keywords .keyword {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background-color: #F1F1F1;
                    height: 40px;
                    border-radius: 8px;
                    padding: 0 10px;
                }

                .keywords-container input {
                    background-color: #F1F1F1 !important;
                    height: 40px !important;
                    width: 120px !important;
                    border: none !important;
                    outline: none !important;
                    border-radius: 8px !important;
                    padding: 0 10px !important;
                    font-family: "Ahrefs" !important;
                    font-size: 15px !important;
                }

                .keywords .keyword div {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .add-keyword {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background-color: #F1F1F1;
                    height: 40px;
                    width: 40px;
                    border-radius: 8px;
                    padding: 0 10px;
                }
                
                .create-audience form label button {
                    background-color: transparent;
                    border: none;
                    outline: none;
                    position: absolute;
                    top: 50%;
                    right: 15px;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
                
                .divider {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin: 50px auto;
                }
                
                .divider hr {
                    display: block;
                    height: 1px;
                    width: 200px;
                    border: 0;
                    border-top: 1px solid #99999950;
                    margin: 1em 0;
                    padding: 0;
                }
                
                .divider p {
                    width: fit-content;
                    font-family: "Ahrefs";
                    font-weight: 900;
                    color: #707070;
                }
                
                .curated-audiences {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                
                .curated-audiences .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .curated-audiences .header h2 {
                    font-family: "Ahrefs";
                    font-size: 22px;
                }
                
                .curated-audiences .header p {
                    font-family: "Ahrefs";
                    color: #919191;
                }
                
                .audiences {
                    border-radius: 40px;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                
                .audiences input {
                    display: none;
                }

                .audiences label {
                    width: 100%;
                }
                
                footer {
                    height: 60px;
                    width: 100%;
                    background-color: #FFFFFF;
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                }
                
                .footer-container {
                    width: 100%;
                    max-width: 1280px;
                    margin: auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                }
                
                .footer-container div {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                
                .footer-container div h4 {
                    font-family: "Ahrefs";
                    font-weight: 900;
                    color: #212121;
                }
                
                .footer-container div p {
                    font-family: "Ahrefs";
                    font-size: 14px;
                    color: #717171;
                }
                
                .footer-container button {
                    border: none;
                    outline: none;
                    padding: 0 15px;
                    border-radius: 10px;
                    font-family: "Ahrefs";
                    background-color: #F5F5F5;
                }

                .loader {
                    display: none !important;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: "Ahrefs";
                }

                .loader.active {
                    display: block !important;
                }
        `}</style>
        </>
    )
}

export default CreateAudience