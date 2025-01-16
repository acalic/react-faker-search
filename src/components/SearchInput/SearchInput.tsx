import React, { useRef } from 'react';
import GoogleLogo from '../../assets/google-logo.png';
import Magnifier from '../../assets/icons/magnifier.svg';
import Close from '../../assets/icons/close.svg';

import './SearchInput.scss';
import { useNavigate } from 'react-router-dom';

export interface SearchInputProps {
  searchQuery: string;
  isSearchHeader?: boolean;
  onChange: (query: string) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, isSearchHeader = 0, onChange, onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <div className={`search-input ${isSearchHeader ? 'search-header' : ''}`}>
      <img
        width={isSearchHeader ? 90 : 272}
        height={isSearchHeader ? 30 : 92}
        src={GoogleLogo}
        alt="Google Logo"
        className="search-logo"
        onClick={handleLogoClick}
      />
      <div className="search-bar">
        <img src={Magnifier} alt="Search" className="magnifier-icon" />
        <label htmlFor="search-input" className="visually-hidden">Search</label>
        <input
          id="search-input"
          autoFocus
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {searchQuery && (
          <img
            src={Close}
            alt="Clear"
            className="close-icon"
            onClick={handleClear}
          />
        )}
      </div>
      <button onClick={onSearch} disabled={!searchQuery} className="search-button">
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
