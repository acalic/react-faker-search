import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, SearchResult, SkeletonLoader, ResultDetails } from '../../components/';
import { faker } from '@faker-js/faker';
import { SearchResultItem, AnimalType } from '../../types/types';
import './SearchResultsPage.scss';

const generateData = (query: string): SearchResultItem[] => {
  const types = Object.values(AnimalType); // Get all enum values
  const normalizedQuery = query.toLowerCase();

  // Return no results if the query is empty
  if (!normalizedQuery) {
    return [];
  }

  // Filter types based on the search query (partial match)
  const matchingTypes = types.filter(type => 
    type.toLowerCase().includes(normalizedQuery)
  );

  // If we have matching types, prioritize them; otherwise, use all types
  const typesToUse = matchingTypes.length > 0 ? matchingTypes : types;

  const data = Array.from({ length: 1000 }, (_, id) => {
    const type = faker.helpers.arrayElement(typesToUse) as AnimalType;
    const title = faker.animal[type](); // Generate the animal name based on the type
    return {
      id,
      url: faker.internet.url(),
      title,
      description: faker.lorem.sentences(),
      image: `https://loremflickr.com/640/360?random=${id}`,
      type,
    };
  });

  // Filter the data based on the search query (case-insensitive)
  return data.filter(item => item.title.toLowerCase().includes(normalizedQuery));
};

const SearchResultsPage = () => {
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedResult, setSelectedResult] = useState<SearchResultItem | null>(null);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || ''; // Get the query or fallback to an empty string

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setResults(generateData(searchQuery));
      setLoading(false);
    }, 1500);
  }, [searchQuery]);

  const handleItemClick = (result: SearchResultItem) => {
    setSelectedResult(result);
  };

  const closeModal = () => {
    setSelectedResult(null);
  };

  const renderNoResultsMessage = () => (
    <>
      {searchQuery && (
        <p>
          No results found for '<b>{searchQuery}</b>'
        </p>
      )}
      <p>
        Try looking for: <b>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</b>
      </p>
    </>
  );

  return (
    <div className="search-results-page">
      <div className="results-container">
        {loading ? (
          <SkeletonLoader />
        ) : results.length ? (
          <div className="search-results">
            <div className="results-list">
              <SearchResult results={results} onItemClick={handleItemClick} />
            </div>
            {selectedResult && (
              <div className="result-details">
                <ResultDetails result={selectedResult} />
              </div>
            )}
          </div>
        ) : (
          renderNoResultsMessage()
        )}
      </div>
      <Modal isOpen={!!selectedResult} onClose={closeModal}>
        {selectedResult && <ResultDetails result={selectedResult} />}
      </Modal>
    </div>
  );
};

export default SearchResultsPage;
