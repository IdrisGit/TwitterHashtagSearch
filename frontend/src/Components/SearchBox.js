import React from "react";

const SearchBox = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className="flex-start pa3 f3">
            <input type= 'text' placeholder='Hashtag' onChange={onInputChange} />
            <button className="pointer" onClick={onButtonSubmit} >
                Search!
            </button>
        </div>
    )
}

export default SearchBox;