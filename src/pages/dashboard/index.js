import Header from "@/components/Header"
import Link from "next/link"

const Dashboard = () => {
    return (
        <>
            <div className="main">
                <Header></Header>
                <div className="body">
                    <div className="recent-audiences">
                        <div className="header">
                            <h2>Recent Audiences</h2>
                            <p><Link href="/dashboard/create-audience" legacyBehavior><a>+ create new</a></Link></p>
                        </div>
                        <div className="audiences">
                            <div className="audience">
                                <div className="audience-container">
                                    <div className="header">
                                        <p>Social Juice</p>
                                        <div className="trash">
                                            <svg width="14" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4.99951H16" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M14.3346 4.99984V16.6665C14.3346 17.1085 14.159 17.5325 13.8465 17.845C13.5339 18.1576 13.11 18.3332 12.668 18.3332H4.33464C3.89261 18.3332 3.46868 18.1576 3.15612 17.845C2.84356 17.5325 2.66797 17.1085 2.66797 16.6665V4.99984M5.16797 4.99984V3.33317C5.16797 2.89114 5.34356 2.46722 5.65612 2.15466C5.96868 1.8421 6.39261 1.6665 6.83464 1.6665H10.168C10.61 1.6665 11.0339 1.8421 11.3465 2.15466C11.659 2.46722 11.8346 2.89114 11.8346 3.33317V4.99984"
                                                    stroke="#FF0000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <p>Trash Audience</p>
                                        </div>
                                    </div>
                                    <div className="audience-stats">
                                        <div>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.9997 9.13443C19.9549 7.92513 18.9397 6.98084 17.7266 7.02189C17.1892 7.04056 16.6778 7.26077 16.2897 7.63027C14.5802 6.46577 12.5722 5.82753 10.5082 5.78274L11.4823 1.09859L14.6959 1.77415C14.7855 2.59901 15.5245 3.19619 16.3494 3.10662C17.1742 3.01704 17.7714 2.27803 17.6818 1.45317C17.5923 0.628309 16.8533 0.0311263 16.0284 0.120704C15.5544 0.169225 15.1289 0.445422 14.8937 0.855985L11.2136 0.120704C10.9635 0.0647178 10.7135 0.221478 10.6575 0.475281C10.6575 0.479013 10.6575 0.479013 10.6575 0.482745L9.54896 5.69316C7.45883 5.72675 5.42467 6.36872 3.69284 7.5407C2.812 6.7121 1.42355 6.75316 0.59496 7.63774C-0.233631 8.51858 -0.192574 9.90703 0.692002 10.7356C0.863692 10.8961 1.06151 11.0342 1.28172 11.1313C1.26679 11.3515 1.26679 11.5717 1.28172 11.7919C1.28172 15.1548 5.20073 17.8906 10.0342 17.8906C14.8676 17.8906 18.7866 15.1585 18.7866 11.7919C18.8016 11.5717 18.8016 11.3515 18.7866 11.1313C19.5406 10.7543 20.0146 9.97795 19.9997 9.13443ZM4.98425 10.6386C4.98425 9.80999 5.65981 9.13443 6.4884 9.13443C7.31699 9.13443 7.99256 9.80999 7.99256 10.6386C7.99256 11.4672 7.31699 12.1427 6.4884 12.1427C5.65608 12.1353 4.98425 11.4672 4.98425 10.6386ZM13.7068 14.7666C12.6394 15.5691 11.333 15.9796 9.99685 15.9236C8.66066 15.9796 7.35432 15.5691 6.28685 14.7666C6.14502 14.5949 6.17115 14.3374 6.34284 14.1955C6.49214 14.0724 6.70488 14.0724 6.85791 14.1955C7.76115 14.8562 8.8622 15.1921 9.98192 15.1398C11.1016 15.1996 12.2064 14.8786 13.1209 14.2254C13.2851 14.0649 13.5538 14.0686 13.7143 14.2329C13.8748 14.3971 13.8711 14.6658 13.7068 14.8263V14.7666ZM13.4381 12.195C12.6095 12.195 11.934 11.5194 11.934 10.6908C11.934 9.86224 12.6095 9.18668 13.4381 9.18668C14.2667 9.18668 14.9423 9.86224 14.9423 10.6908C14.9759 11.5194 14.3302 12.2174 13.5016 12.251C13.4754 12.251 13.453 12.251 13.4269 12.251L13.4381 12.195Z"
                                                    fill="#FF4500" />
                                            </svg>
                                            <p>12 Subreddits</p>
                                        </div>
                                        <div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.50008" cy="4.99984" r="3.33333" stroke="#FF4500" strokeWidth="1.5" />
                                                <path d="M12.5 7.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5"
                                                    stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
                                                <ellipse cx="7.50008" cy="14.1668" rx="5.83333" ry="3.33333" stroke="#FF4500"
                                                    strokeWidth="1.5" />
                                                <path
                                                    d="M15 11.6665C16.4619 11.9871 17.5 12.7989 17.5 13.7498C17.5 14.6076 16.6552 15.3523 15.4167 15.7252"
                                                    stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <p>1.1M Members</p>
                                        </div>
                                    </div>
                                    <div className="audience-subreddits">
                                        <div>
                                        </div>
                                        <p>+8 Subreddits</p>
                                    </div>
                                </div>
                            </div>
                            <div className="audience">
                                <div className="audience-container">
                                    <div className="header">
                                        <p>Social Juice</p>
                                        <div className="trash">
                                            <svg width="14" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4.99951H16" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M14.3346 4.99984V16.6665C14.3346 17.1085 14.159 17.5325 13.8465 17.845C13.5339 18.1576 13.11 18.3332 12.668 18.3332H4.33464C3.89261 18.3332 3.46868 18.1576 3.15612 17.845C2.84356 17.5325 2.66797 17.1085 2.66797 16.6665V4.99984M5.16797 4.99984V3.33317C5.16797 2.89114 5.34356 2.46722 5.65612 2.15466C5.96868 1.8421 6.39261 1.6665 6.83464 1.6665H10.168C10.61 1.6665 11.0339 1.8421 11.3465 2.15466C11.659 2.46722 11.8346 2.89114 11.8346 3.33317V4.99984"
                                                    stroke="#FF0000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <p>Trash Audience</p>
                                        </div>
                                    </div>
                                    <div className="audience-stats">
                                        <div>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.9997 9.13443C19.9549 7.92513 18.9397 6.98084 17.7266 7.02189C17.1892 7.04056 16.6778 7.26077 16.2897 7.63027C14.5802 6.46577 12.5722 5.82753 10.5082 5.78274L11.4823 1.09859L14.6959 1.77415C14.7855 2.59901 15.5245 3.19619 16.3494 3.10662C17.1742 3.01704 17.7714 2.27803 17.6818 1.45317C17.5923 0.628309 16.8533 0.0311263 16.0284 0.120704C15.5544 0.169225 15.1289 0.445422 14.8937 0.855985L11.2136 0.120704C10.9635 0.0647178 10.7135 0.221478 10.6575 0.475281C10.6575 0.479013 10.6575 0.479013 10.6575 0.482745L9.54896 5.69316C7.45883 5.72675 5.42467 6.36872 3.69284 7.5407C2.812 6.7121 1.42355 6.75316 0.59496 7.63774C-0.233631 8.51858 -0.192574 9.90703 0.692002 10.7356C0.863692 10.8961 1.06151 11.0342 1.28172 11.1313C1.26679 11.3515 1.26679 11.5717 1.28172 11.7919C1.28172 15.1548 5.20073 17.8906 10.0342 17.8906C14.8676 17.8906 18.7866 15.1585 18.7866 11.7919C18.8016 11.5717 18.8016 11.3515 18.7866 11.1313C19.5406 10.7543 20.0146 9.97795 19.9997 9.13443ZM4.98425 10.6386C4.98425 9.80999 5.65981 9.13443 6.4884 9.13443C7.31699 9.13443 7.99256 9.80999 7.99256 10.6386C7.99256 11.4672 7.31699 12.1427 6.4884 12.1427C5.65608 12.1353 4.98425 11.4672 4.98425 10.6386ZM13.7068 14.7666C12.6394 15.5691 11.333 15.9796 9.99685 15.9236C8.66066 15.9796 7.35432 15.5691 6.28685 14.7666C6.14502 14.5949 6.17115 14.3374 6.34284 14.1955C6.49214 14.0724 6.70488 14.0724 6.85791 14.1955C7.76115 14.8562 8.8622 15.1921 9.98192 15.1398C11.1016 15.1996 12.2064 14.8786 13.1209 14.2254C13.2851 14.0649 13.5538 14.0686 13.7143 14.2329C13.8748 14.3971 13.8711 14.6658 13.7068 14.8263V14.7666ZM13.4381 12.195C12.6095 12.195 11.934 11.5194 11.934 10.6908C11.934 9.86224 12.6095 9.18668 13.4381 9.18668C14.2667 9.18668 14.9423 9.86224 14.9423 10.6908C14.9759 11.5194 14.3302 12.2174 13.5016 12.251C13.4754 12.251 13.453 12.251 13.4269 12.251L13.4381 12.195Z"
                                                    fill="#FF4500" />
                                            </svg>
                                            <p>12 Subreddits</p>
                                        </div>
                                        <div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.50008" cy="4.99984" r="3.33333" stroke="#FF4500" strokeWidth="1.5" />
                                                <path d="M12.5 7.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5"
                                                    stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
                                                <ellipse cx="7.50008" cy="14.1668" rx="5.83333" ry="3.33333" stroke="#FF4500"
                                                    strokeWidth="1.5" />
                                                <path
                                                    d="M15 11.6665C16.4619 11.9871 17.5 12.7989 17.5 13.7498C17.5 14.6076 16.6552 15.3523 15.4167 15.7252"
                                                    stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <p>1.1M Members</p>
                                        </div>
                                    </div>
                                    <div className="audience-subreddits">
                                        <div>
                                        </div>
                                        <p>+8 Subreddits</p>
                                    </div>
                                </div>
                            </div>
                            <div className="audience">
                                <div className="audience-container">
                                    <div className="header">
                                        <p>Social Juice</p>
                                        <div className="trash">
                                            <svg width="14" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4.99951H16" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M14.3346 4.99984V16.6665C14.3346 17.1085 14.159 17.5325 13.8465 17.845C13.5339 18.1576 13.11 18.3332 12.668 18.3332H4.33464C3.89261 18.3332 3.46868 18.1576 3.15612 17.845C2.84356 17.5325 2.66797 17.1085 2.66797 16.6665V4.99984M5.16797 4.99984V3.33317C5.16797 2.89114 5.34356 2.46722 5.65612 2.15466C5.96868 1.8421 6.39261 1.6665 6.83464 1.6665H10.168C10.61 1.6665 11.0339 1.8421 11.3465 2.15466C11.659 2.46722 11.8346 2.89114 11.8346 3.33317V4.99984"
                                                    stroke="#FF0000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <p>Trash Audience</p>
                                        </div>
                                    </div>
                                    <div className="audience-stats">
                                        <div>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.9997 9.13443C19.9549 7.92513 18.9397 6.98084 17.7266 7.02189C17.1892 7.04056 16.6778 7.26077 16.2897 7.63027C14.5802 6.46577 12.5722 5.82753 10.5082 5.78274L11.4823 1.09859L14.6959 1.77415C14.7855 2.59901 15.5245 3.19619 16.3494 3.10662C17.1742 3.01704 17.7714 2.27803 17.6818 1.45317C17.5923 0.628309 16.8533 0.0311263 16.0284 0.120704C15.5544 0.169225 15.1289 0.445422 14.8937 0.855985L11.2136 0.120704C10.9635 0.0647178 10.7135 0.221478 10.6575 0.475281C10.6575 0.479013 10.6575 0.479013 10.6575 0.482745L9.54896 5.69316C7.45883 5.72675 5.42467 6.36872 3.69284 7.5407C2.812 6.7121 1.42355 6.75316 0.59496 7.63774C-0.233631 8.51858 -0.192574 9.90703 0.692002 10.7356C0.863692 10.8961 1.06151 11.0342 1.28172 11.1313C1.26679 11.3515 1.26679 11.5717 1.28172 11.7919C1.28172 15.1548 5.20073 17.8906 10.0342 17.8906C14.8676 17.8906 18.7866 15.1585 18.7866 11.7919C18.8016 11.5717 18.8016 11.3515 18.7866 11.1313C19.5406 10.7543 20.0146 9.97795 19.9997 9.13443ZM4.98425 10.6386C4.98425 9.80999 5.65981 9.13443 6.4884 9.13443C7.31699 9.13443 7.99256 9.80999 7.99256 10.6386C7.99256 11.4672 7.31699 12.1427 6.4884 12.1427C5.65608 12.1353 4.98425 11.4672 4.98425 10.6386ZM13.7068 14.7666C12.6394 15.5691 11.333 15.9796 9.99685 15.9236C8.66066 15.9796 7.35432 15.5691 6.28685 14.7666C6.14502 14.5949 6.17115 14.3374 6.34284 14.1955C6.49214 14.0724 6.70488 14.0724 6.85791 14.1955C7.76115 14.8562 8.8622 15.1921 9.98192 15.1398C11.1016 15.1996 12.2064 14.8786 13.1209 14.2254C13.2851 14.0649 13.5538 14.0686 13.7143 14.2329C13.8748 14.3971 13.8711 14.6658 13.7068 14.8263V14.7666ZM13.4381 12.195C12.6095 12.195 11.934 11.5194 11.934 10.6908C11.934 9.86224 12.6095 9.18668 13.4381 9.18668C14.2667 9.18668 14.9423 9.86224 14.9423 10.6908C14.9759 11.5194 14.3302 12.2174 13.5016 12.251C13.4754 12.251 13.453 12.251 13.4269 12.251L13.4381 12.195Z"
                                                    fill="#FF4500" />
                                            </svg>
                                            <p>12 Subreddits</p>
                                        </div>
                                        <div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.50008" cy="4.99984" r="3.33333" stroke="#FF4500" strokeWidth="1.5" />
                                                <path d="M12.5 7.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5"
                                                    stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
                                                <ellipse cx="7.50008" cy="14.1668" rx="5.83333" ry="3.33333" stroke="#FF4500"
                                                    strokeWidth="1.5" />
                                                <path
                                                    d="M15 11.6665C16.4619 11.9871 17.5 12.7989 17.5 13.7498C17.5 14.6076 16.6552 15.3523 15.4167 15.7252"
                                                    stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <p>1.1M Members</p>
                                        </div>
                                    </div>
                                    <div className="audience-subreddits">
                                        <div>
                                        <img src="/assets/images/subreddit.png" />
                                        <img src="/assets/images/subreddit.png" />
                                        <img src="/assets/images/subreddit.png" />
                                        <img src="/assets/images/subreddit.png" />
                                        <img src="/assets/images/subreddit.png" />
                                        <img src="/assets/images/subreddit.png" />
                                        </div>
                                        <p>+8 Subreddits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="generated-content">
                        <div className="header">
                            <h2>Generated Content</h2>
                        </div>
                        <div className="contents">
                            <div className="content">
                                <div className="content-container">
                                    <div className="col-1">
                                        <div>
                                            👋🏻 CYC-2024
                                        </div>
                                        <p>Create ideas for content or topic suggestions</p>
                                    </div>
                                    <div className="col-2">
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .recent-audiences {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .recent-audiences .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .recent-audiences .header h2 {
                font-family: "Ahrefs";
                font-size: 22px;
            }

            .recent-audiences .header a {
                font-family: "Ahrefs";
                color: #919191;
                text-decoration: none;
            }
            
            .audiences {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 40px;
                display: grid;
                grid-template-columns: repeat(3,1fr);
                gap: 20px;
            }
            
            .audience {
                background-color: #F9F9F9;
                border: solid 1px #E5E5E5;
                padding: 20px;
                border-radius: 25px;
            }
            
            .audience-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .audience-container .header {
                display: flex;
                justify-content: space-between;
            }
            
            .audience-container .header p {
                color: #212121;
                font-family: "Ahrefs";
                font-size: 18px;
            }
            
            .audience-container .trash {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .audience-container .trash p {
                color: #FF0000;
                font-family: "Ahrefs";
                font-size: 14px;
            }
            
            .audience-container .audience-stats {
                display: flex;
                align-items: center;
                gap: 30px;
                font-family: "Ahrefs";
                font-size: 14px;
                color: #616161;
            }
            
            .audience-container .audience-stats div {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .audience-container .audience-subreddits {
                display: flex;
                flex-direction: column;
                gap: 20px;
                background-color: #FFFFFF;
                padding: 10px;
                border-radius: 10px;
            }
            
            .audience-container .audience-subreddits div {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                gap: 5px;
            }
            
            .audience-container .audience-subreddits div img {
                width: 100%;
            }
            
            .audience-container .audience-subreddits p {
                color: #919191;
                margin: auto;
                font-family: "Ahrefs";
                font-size: 14px;
            }
            
            .generated-content {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .generated-content .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .generated-content .header h2 {
                font-family: "Ahrefs";
                font-size: 22px;
            }
            
            .generated-content .header p {
                font-family: "Ahrefs";
                color: #919191;
            }
            
            .contents {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .content {
                background-color: #FFFFFF;
                border: solid 1px #E5E5E5;
                padding: 10px;
                border-radius: 10px;
            }
            
            .content-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .content .col-1 {
                display: flex;
                align-items: center;
                gap: 20px;
            }
            
            .content .col-1 div {
                background-color: #F5F5F5;
                border-radius: 5px;
                padding: 5px;
                font-family: "Ahrefs";
                color: #919191;
            }
            
            .content .col-1 p {
                font-family: "Ahrefs";
            }
            
            .content .col-2 div {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        `}</style>
        </>
    )
}

export default Dashboard