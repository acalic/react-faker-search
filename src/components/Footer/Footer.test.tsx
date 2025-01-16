import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders the footer with correct content', () => {
    render(<Footer />);

    expect(screen.getByText(/© Google 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/version: 0.1.0/i)).toBeInTheDocument();
  });
});