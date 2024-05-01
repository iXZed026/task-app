import React from 'react';
import "./Search.css"

const Search: React.FC = () => {
    return (
        <form action="" className="form-search">
            <input type="text" className="name" placeholder='نام' />
            <input type="text" className="name" placeholder='نام' />
            <input type="text" className="name" placeholder='نام' />
            <button type="submit" value="جست و جو">جست و جو</button>
        </form>
    )
}

export default Search