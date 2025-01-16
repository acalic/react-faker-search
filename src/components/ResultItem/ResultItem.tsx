import React from 'react';
import { SearchResultItem } from '../../types/types';
import './ResultItem.scss';

interface ResultItemProps {
  result: SearchResultItem;
  onClick: () => void;
}

const ResultItem: React.FC<ResultItemProps> = ({ result, onClick }) => {
  return (
    <div className="result-item">
      <a href={result.url} className="result-item-url" target="_blank" rel="noreferrer">
        {result.url}
      </a>
      <h3 className="result-item-title" onClick={onClick}>{result.title}</h3>
      <p className="result-item-description">{result.description}</p>
    </div>
  );
};

export default ResultItem;
