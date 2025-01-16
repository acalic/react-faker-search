import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchInputProps } from '../SearchInput/SearchInput';
import Header from './Header';

// Mock the SearchInput component
jest.mock('../SearchInput/SearchInput', () => ({
  __esModule: true,
  default: ({ searchQuery, onChange, onSearch }: SearchInputProps) => (
    <div data-testid="search-input">
      <input
        data-testid="search-input-field"
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
      />
      <button data-testid="search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  ),
}));

describe('Header Component', () => {
  test('renders the header with the logo when showSearchInput is false', () => {
    render(
      <MemoryRouter>
        <Header showSearchInput={false} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Agile Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend test/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Avatar/i)).toBeInTheDocument();
  });

  test('renders the search input when showSearchInput is true', () => {
    render(
      <MemoryRouter>
        <Header showSearchInput={true} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  test('prefills the search input with the query from the URL', () => {
    const query = 'test';
    render(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Header showSearchInput={true} />
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue(query)).toBeInTheDocument();
  });

  test('renders header icons', () => {
    render(
      <MemoryRouter>
        <Header showSearchInput={false} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Menu')).toBeInTheDocument();
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });
});