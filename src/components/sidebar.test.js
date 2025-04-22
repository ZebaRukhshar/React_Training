import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from './sidebar'; 
import '@testing-library/jest-dom/extend-expect';

describe('sidebar Component', () => {
  test('renders Facebook logo', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const logo = screen.getByAltText('Facebook');
    expect(logo).toBeInTheDocument();
  });

  test('renders Home menu item', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders Profile menu item', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  test('renders Messages menu item', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Messages')).toBeInTheDocument();
  });

  test('renders Logout menu item', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('renders Products menu item', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
