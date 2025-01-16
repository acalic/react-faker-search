import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from './Homepage';
import { MemoryRouter } from 'react-router-dom';
import { SearchInputProps } from '../../components/SearchInput/SearchInput';

// Mock the SearchInput component
jest.mock('../../components/SearchInput/SearchInput', () => ({
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

describe('Homepage Component', () => {
  test('renders the homepage with search input', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  test('updates search query on input change', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const input = screen.getByTestId('search-input-field');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });
});