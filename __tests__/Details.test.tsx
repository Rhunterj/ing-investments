
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import StockDetailPage from '../pages/details/[slug]'
import { StockItemMock } from './__mocks__/StockItemMock';

describe('DetailPage', () => {
  it('renders a heading', () => {
    render(<StockDetailPage pageData={StockItemMock}/>);

    const heading = screen.getByRole('heading', {
      name: 'Adyen',
    })

    expect(heading).toBeInTheDocument()
  });

  
  it('renders without data', () => {
    act(() => {
      render(<StockDetailPage pageData={undefined}/>)
    })

    const heading = screen.getByText('There is no data available for this stock')

    expect(heading).toBeInTheDocument()
  });

  it('render Details unchanged', () => {
    const { container } = render(<StockDetailPage pageData={StockItemMock} />);
    expect(container).toMatchSnapshot();
  });
})