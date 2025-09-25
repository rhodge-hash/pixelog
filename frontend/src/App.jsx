import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SearchResults from './components/SearchResults';
import { uploadFile, search } from './services/api';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleUpload = async (file) => {
    const result = await uploadFile(file);
    console.log('Upload result:', result);
  };

  const handleSearch = async (query) => {
    const results = await search(query);
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Pixelog</h1>
      <FileUpload onUpload={handleUpload} />
      <hr />
      <input
        type="text"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(e.target.value);
          }
        }}
      />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
