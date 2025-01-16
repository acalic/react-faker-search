import { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';

import './Homepage.scss';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="homepage">
      <main className="homepage-content">
        <SearchInput
          searchQuery={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
        />
      </main>
    </div>
  );
};

export default Homepage;
