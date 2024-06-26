import './SearchBar.css';
const SearchBar = ({query, onChange}) => {
    return (
        <>
            <input className="search-input" type="text" placeholder="Search notes..." value={query} onChange={onChange}/>
        </>
    );
}

export default SearchBar;