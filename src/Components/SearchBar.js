let SearchBarStyle = {
    height: '25px',
    width: '250px',
    borderRadius: '5px',
    border: '2px solid black',
    paddingLeft: '15px',
    margin: '30px auto'
}



function SearchBar() {
    return (
        <input style={SearchBarStyle} type='text' placeholder= 'Search for a User' />
    )
}

export default SearchBar