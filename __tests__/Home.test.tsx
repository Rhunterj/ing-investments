
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Home from '../pages/index'
import { StockItemsMock } from './__mocks__/StockItemsMock';
import { tasksHandlerException } from './__mocks__/handlers';
import { server } from './__mocks__/server';

describe('Home', () => {
  it('renders a heading', () => {
    act(() => {
      render(<Home data={StockItemsMock}/>)
    })

    const heading = screen.getByRole('heading', {
      name: 'AEX',
    })

    expect(heading).toBeInTheDocument()
  });

  it('Failed api reqeust', async () => {
    server.use(tasksHandlerException);

    render(<Home />);

    expect(await screen.findByText('There was an issue collecting the data')).toBeInTheDocument();
  });

  it('render Home unchanged', () => {
    const { container } = render(<Home data={StockItemsMock} />);
    expect(container).toMatchSnapshot();
  });
})