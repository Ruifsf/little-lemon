import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const mockSetAvailableTimes = jest.fn();
  const availableTimes = ["12:00", "13:00", "14:00"];

  render(
    <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        submitForm={mockOnFormSubmit}
    />
  );

  // Verificar que el label "Date" es visible, como indicativo de que el componente se renderizó
  const dateLabel = screen.getByText(/Date/i);
  expect(dateLabel).toBeInTheDocument();
});