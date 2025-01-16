import './Header.scss';
import NineDotsIcon from '../../assets/icons/nine-dots.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';

interface HeaderProps {
  showSearchInput: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSearchInput }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Extract the query parameter from the URL and prefill the search input
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q') || '';
    setSearchQuery(query);
  }, [location.search]);  // Update when the location (query) changes

  const handleSearch = () => {
    const query = searchQuery.trim();
    const searchPath = query ? `/search?q=${encodeURIComponent(query)}` : `/search`;
    window.location.href = searchPath;
  };

  return (
    <header className={`header ${showSearchInput ? 'has-search' : ''}`}>
      {showSearchInput ? (
        <SearchInput
          isSearchHeader={showSearchInput}
          searchQuery={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
        />
      ) : (
        <div className="logo">
          <span className="logo-brand">Agile Content</span>
          <span>Frontend test</span>
        </div>
      )}
      <div>
        <div className="header-icons">
          <img src={NineDotsIcon} alt="Menu" className="icon-menu" />
          <img src="https://i.pravatar.cc/60" alt="Avatar" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
