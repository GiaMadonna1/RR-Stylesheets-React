import './App.css';
import SearchBar from './Components/SearchBar'
import UserGallery from './Components/UserGallery/UserGallery';

function App() {
  return (
    <div className="App">
      <h1> User Profile </h1>
      <SearchBar />
      <UserGallery />
    </div>
  );
}

export default App;
