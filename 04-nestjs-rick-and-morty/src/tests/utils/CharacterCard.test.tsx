import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCard from '@/components/CharacterCard';
import { vi } from 'vitest';
import { navigateToCharacter } from '@/app/actions';
import { setFavoriteCharacter } from '@/actions/characters';
import '@testing-library/jest-dom';

vi.mock('../app/actions');
vi.mock('@/actions/characters');

describe('CharacterCard', () => {
  const character = {
    image: 'https://example.com/image.jpg',
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
    type: 'Main character',
  };

  const renderComponent = (isFavorite = false) => {
    return render(<CharacterCard character={character} isFavorite={isFavorite} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render character information correctly', () => {
    renderComponent();

    expect(screen.getByAltText(`${character.name} image`)).toBeInTheDocument();
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(`${character.status} - ${character.species}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${character.location.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Origin: ${character.origin.name}`)).toBeInTheDocument();
  });

  it('should call setFavoriteCharacter with correct ID when favorite button is clicked', () => {
    renderComponent();

    fireEvent.click(screen.getByAltText('Favorite'));
    expect(setFavoriteCharacter).toHaveBeenCalledWith(character.id);
  });

  it('should display filled star when isFavorite is true', () => {
    renderComponent(true);

    expect(screen.getByAltText('Favorite')).toHaveAttribute('src', '/filledStar.svg');
  });

  it('should display empty star when isFavorite is false', () => {
    renderComponent();

    expect(screen.getByAltText('Favorite')).toHaveAttribute('src', '/emptyStar.svg');
  });
});
