function SearchBar(props) {
    return (
        <>
            <h1 class="heading-2">{props.title}</h1>
            <div class="search-wrap">
                <input type="search" name="search" id="search" placeholder="Search Books"/>
                <button class="btn btn-primary">Search</button>
            </div>
        </>
    )
}

export default SearchBar