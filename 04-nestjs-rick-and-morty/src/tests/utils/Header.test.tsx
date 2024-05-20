import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
    const renderComponent = () => {
        return render(
        <Router>
            <Header />
        </Router>
        );
    };

  it('should render the header correctly', () => {
    renderComponent();

    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(screen.getByText('Rick and Morty Characters')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  it('should have correct links', () => {
    renderComponent();

    expect(screen.getByText('Characters')).toHaveAttribute('href', '/');
    expect(screen.getByText('Favorites')).toHaveAttribute('href', '/favorites');
  });
});
