const Search = ({searchItem, setSearchItem}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                id='search'
                type="text"
                value={searchItem}
                placeholder="Search"
                role='searchbox'
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </form>
    )
}

export default Search;