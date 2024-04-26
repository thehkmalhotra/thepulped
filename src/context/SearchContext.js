import { createContext, useState } from "react";

export const SearchContext = createContext(null);
export const SearchProvider = (props) => {
    const [searchData, setSearchData] = useState([]);
    return (
        <SearchContext.Provider value={{ searchData, setSearchData }}>
            {props.children}
        </SearchContext.Provider>
    )
}