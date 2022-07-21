
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import StockItems from '../components/StockItems/StockItems'
import { StockItemsMock } from './__mocks__/StockItemsMock';

const mockData = StockItemsMock.instruments;

describe('DetailPage', () => {
  it('renders a heading', () => {
    act(() => {
      render(<StockItems stockItems={mockData}/>)
    })

    const row = screen.getByRole('row', {
      name: 'Adyen 1622.365 EUR +26.16 EUR +1.64% 10:38',
    })

    expect(row).toBeInTheDocument()
  });
});