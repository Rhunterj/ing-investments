import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch'
import { server } from './__tests__/__mocks__/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());