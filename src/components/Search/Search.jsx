import React, { useState } from "react";

////////////////////////////////////////////////////////////////
import SearchDropDown from "./SearchDropDown/SearchDropDown";
import { SearchBox, SearchContainer } from "./SearchBox.style";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "../../utilities/hooks/useDebounce";
import { useRouter } from "next/router";

const SearchHeader = (props) => {
  const [inputData, setInputData] = useState("");
  const [focus, setFocus] = useState(false);
  const Debounce = useDebounce(inputData, 500);
  const router = useRouter();

  return (
    <SearchContainer tabIndex="2">
      <SearchBox>
        <input
          type="search"
          placeholder="Search For Products ..."
          id="searchInput"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          onFocus={(e) => {
            setFocus(true);
          }}
          onBlur={(e) => {
            setTimeout(() => {
              setFocus(false);
              setInputData("");
            }, 600);
          }}
          onKeyDown={(e) => {
            if (e?.keyCode === 13) {
              router.push(`/all/search/${e.target.value}`);
              setFocus(false);
              setInputData("");
            }
          }}
        />
        <span className="icon">
          <FiSearch />
        </span>
      </SearchBox>
      {focus && inputData.length > 2 ? <SearchDropDown searchData={Debounce} /> : null}
    </SearchContainer>
  );
};

export default SearchHeader;
