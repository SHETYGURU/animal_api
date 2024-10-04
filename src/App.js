import React, { useState, useEffect } from 'react';
import { fetchDogBreeds } from './services/dogService';
import { fetchCatBreeds } from './services/catService';

function App() {
  const [view, setView] = useState('dogs'); 
  const [dogBreeds, setDogBreeds] = useState([]);
  const [catBreeds, setCatBreeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [clickedItem, setClickedItem] = useState(null); 

  useEffect(() => {
    const loadDogs = async () => {
      const dogs = await fetchDogBreeds();
      setDogBreeds(dogs);
      setFilteredDogs(dogs);
    };
    loadDogs();
  }, []);

  useEffect(() => {
    const loadCats = async () => {
      const cats = await fetchCatBreeds();
      setCatBreeds(cats);
      setFilteredCats(cats);
    };
    loadCats();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (view === 'dogs') {
      const filtered = dogBreeds.filter(dog =>
        dog.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDogs(filtered);
    } else if (view === 'cats') {
      const filtered = catBreeds.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCats(filtered);
    }
  };

  const handleItemClick = (item) => {
    setClickedItem(item); 
  };

  const closeModal = () => {
    setClickedItem(null); 
  };

  const renderGridWithItems = (items) => {
    return items.map((item) => (
      <div key={item.id} className="grid-item" onClick={() => handleItemClick(item)}>
        <img src={item.image?.url || 'https://via.placeholder.com/350x250'} alt={item.name} />
        <h3 className="item-name">{item.name}</h3>
      </div>
    ));
  };

  return (
    <div className="app-container">
      <header className="header">
  <h1 className="app-title">🐾 Furry Friends Explorer 🐾</h1>
  <button className="cat-btn" onClick={() => setView(view === 'dogs' ? 'cats' : 'dogs')}>
    <img 
      src={view === 'dogs' ? require('./image/cat.gif') : require('./image/dog.gif')} 
      alt={view === 'dogs' ? 'Cat Icon' : 'Dog Icon'} 
    />
    {view === 'dogs' ? 'View Cats' : 'View Dogs'}
  </button>
</header>


      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={`Search ${view === 'dogs' ? 'Dog' : 'Cat'} breeds`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>
      </div>

      <main>
        {view === 'dogs' && (
          <div className="dog-list">
            {filteredDogs.length > 0 ? (
              renderGridWithItems(filteredDogs)
            ) : (
              <p>No matching dog breeds found.</p>
            )}
          </div>
        )}

        {view === 'cats' && (
          <div className="cat-list">
            {filteredCats.length > 0 ? (
              renderGridWithItems(filteredCats)
            ) : (
              <p>No matching cat breeds found.</p>
            )}
          </div>
        )}
      </main>

      {/* Modal Popup */}
      {clickedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <div className="modal-image">
              <img src={clickedItem.image?.url || 'https://via.placeholder.com/350x250'} alt={clickedItem.name} />
            </div>
            <div className="modal-text">
              <h2>{clickedItem.name}</h2>
              <p>{clickedItem.temperament || clickedItem.description || 'No description available'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
