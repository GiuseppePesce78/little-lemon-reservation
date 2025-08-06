import { render, screen } from '@testing-library/react';
import { BookingForm } from '../BookingForm';
import { MemoryRouter } from 'react-router-dom';

describe('BookingForm', () => {
  it('renders the name input', () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    // Cerca tramite placeholder
    expect(screen.getByPlaceholderText(/mario rossi/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email@example.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/eventuali richieste/i)).toBeInTheDocument();

    // Cerca tramite tipo input
    expect(screen.getByRole('button', { name: /prenota/i })).toBeInTheDocument();
  });
});
