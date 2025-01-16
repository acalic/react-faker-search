import React from 'react';
import ResultItem from '../ResultItem/ResultItem';
import { SearchResultItem } from '../../types/types';
import './SearchResult.scss';

interface SearchResultProps {
  results: SearchResultItem[];
  onItemClick: (result: SearchResultItem) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ results, onItemClick }) => {
  return (
    <div className="search-result">
      {results.map((result) => (
        <ResultItem
          key={result.id}
          result={result}
          onClick={() => onItemClick(result)}
        />
      ))}
    </div>
  );
};

export default SearchResult;
