
import { render, screen } from '@testing-library/react'
import StockItem from '../components/StockItem/StockItem'
import { StockItemMock } from './__mocks__/StockItemMock';

describe('DetailPage', () => {
  it('renders a heading', () => {
    render(<StockItem stockItem={StockItemMock}/>)

    const row = screen.getByRole('row', {
      name: 'Adyen 1622.365 EUR +26.16 EUR +1.64% 10:38',
    })

    expect(row).toBeInTheDocument()
  });
});