const Header = () => {
  return (
    <>
        <header>
            <img src="/assets/images/logo.svg" />
            <div className="header-end">
                <div className="header-end-left">
                    <div className="col-1">
                        <div></div>
                        <p>Refer</p>
                    </div>
                    <div className="col-2">
                        <div>
                            <p>Create Audience</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="header-end-right">
                    <div className="notification">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.2198 9.70957V9.00497C19.2198 5.13623 16.1981 2 12.4707 2C8.74326 2 5.72157 5.13623 5.72157 9.00497V9.70957C5.72157 10.5552 5.48042 11.3818 5.0285 12.0854L3.92106 13.8095C2.90953 15.3843 3.68175 17.5249 5.44107 18.0229C10.0434 19.3257 14.898 19.3257 19.5003 18.0229C21.2597 17.5249 22.0319 15.3843 21.0203 13.8095L19.9129 12.0854C19.461 11.3818 19.2198 10.5552 19.2198 9.70957Z"
                                stroke="#616161" strokeWidth="2" />
                            <path
                                d="M7.9707 19C8.62573 20.7478 10.3932 22 12.4707 22C14.5482 22 16.3157 20.7478 16.9707 19"
                                stroke="#616161" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="premium">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.0797 13.5616L22.3089 11.1263C22.4889 9.2137 22.5789 8.25739 22.2517 7.86207C22.0747 7.64823 21.834 7.5172 21.5767 7.4946C21.101 7.45282 20.5036 8.1329 19.3088 9.49307C18.6909 10.1965 18.382 10.5482 18.0373 10.6027C17.8464 10.6328 17.6518 10.6018 17.4754 10.5131C17.1572 10.3529 16.945 9.91812 16.5206 9.04851L14.2838 4.46485C13.4819 2.82162 13.0809 2 12.4707 2C11.8605 2 11.4596 2.82162 10.6576 4.46486L8.42077 9.04852C7.9964 9.91812 7.78421 10.3529 7.46596 10.5131C7.28962 10.6018 7.09505 10.6328 6.90408 10.6027C6.55942 10.5482 6.25047 10.1965 5.63257 9.49307C4.43778 8.1329 3.84039 7.45282 3.36469 7.4946C3.10736 7.5172 2.86668 7.64823 2.68969 7.86207C2.3625 8.25739 2.4525 9.2137 2.63251 11.1263L2.86171 13.5616C3.23936 17.5742 3.42818 19.5805 4.6108 20.7902C5.79341 22 7.56587 22 11.1108 22H13.8306C17.3755 22 19.148 22 20.3306 20.7902C21.5132 19.5805 21.702 17.5742 22.0797 13.5616Z"
                                stroke="#616161" strokeWidth="2" />
                            <path d="M9.4707 18H15.4707" stroke="#616161" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                    </div>
                    <div className="account">
                        <img src="/assets/images/avatar.png" />
                    </div>
                </div>
            </div>
        </header>

        <style jsx>{`
        header {
            height: 80px;
            width: 100%;
            max-width: 1280px;
            margin: auto;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .header-end {
            display: flex;
            align-items: center;
            gap: 40px;
            height: 40px;
        }
        
        .header-end-left {
            display: flex;
            align-items: center;
            height: 100%;
        }
        
        .header-end .col-1 {
            height: 100%;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0 10px;
            background-color: #ffffff;
            border-top: solid 1px #E5E5E5;
            border-left: solid 1px #E5E5E5;
            border-bottom: solid 1px #E5E5E5;
            border-right: solid 1px #E5E5E5;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }
        
        .header-end .col-1 div {
            display: flex;
            align-items: center;
        }
        
        .header-end .col-1 div svg:first-child {
            margin-left: 0;
        }
        
        .header-end .col-1 div svg {
            margin-left: -15px;
        }
        
        .header-end .col-1 p {
            font-family: "Ahrefs";
            color: #616161;
        }
        
        .header-end .col-2 {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 10px;
            background-color: #ffffff;
            border-top: solid 1px #E5E5E5;
            border-bottom: solid 1px #E5E5E5;
            border-right: solid 1px #E5E5E5;
            transition: all .2s;
        }
        
        .header-end .col-2 div {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .header-end .col-2 p {
            font-family: "Ahrefs";
            color: #616161;
        }
        
        .header-end .col-3 {
            height: 100%;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            border-top: solid 1px #E5E5E5;
            border-bottom: solid 1px #E5E5E5;
            border-right: solid 1px #E5E5E5;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
        }
        
        .header-end .col-3 div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3.5px;
        }
        
        .header-end .col-3 div span {
            height: 2px;
            width: 2px;
            background-color: #212121;
            opacity: .6;
        }
        
        .header-end .col-1:hover,
        .header-end .col-2:hover,
        .header-end .col-3:hover {
            background-color: #F5F5F5;
        }
        
        .header-end-right {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .header-end-right img {
            width: 40px;
            border: solid 1px #ffffff;
            border-radius: 100px;
        }
        `}</style>
    </>
  )
}

export default Header