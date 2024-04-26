const RedditCard = (props) => {
    return (
        <>
            <div className="subreddit">
                <div className="subreddit-container">
                    <div className="header">
                        <img src={props.icon} />
                        <div>
                            <h4>{props.name}</h4>
                            <p>{props.members}</p>
                        </div>
                    </div>
                    <div className="subreddit-bio">
                        <p>{props.bio.slice(0,90) + "..."}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .subreddit {
                    width: 100%;
                    background-color: #F9F9F9;
                    border: solid 2px #E5E5E5;
                    padding: 20px;
                    border-radius: 25px;
                    cursor: pointer;
                }
                
                .subreddit-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                
                .subreddit-container .header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .subreddit-container .header img {
                    width: 50px;
                }

                .subreddit-container .header div {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .subreddit-container .header div h4 {
                    font-family: "Ahrefs";
                    font-weight: 900;
                    font-size: 16px;
                    color: #212121;
                }

                .subreddit-container .header div p {
                    font-family: "Ahrefs";
                    font-weight: 400;
                    font-size: 14px;
                    color: #707070;
                }
                
                .subreddit-bio p {
                    color: #919191;
                    margin: auto;
                    font-family: "Ahrefs";
                    font-size: 16px;
                    font-weight: 400;
                }
            `}</style>
        </>
    )
}

export default RedditCard