import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';
import { pageContent } from '../../state/initialState';
import { Provider } from 'react-redux';
import store from '../../state/reduxStore';

const mockHistoryListen = (func) => {
  func({ pathname: '/test/tes' });
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    listen: mockHistoryListen
  }),
}));


test('should render component without crash', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Main pageContent={pageContent} updateHeader={() => { }} setDefaultProfile={() => { }} />
      </Provider>
    </MemoryRouter>
  );
});

test('should render with main header received through props', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Main pageContent={pageContent} updateHeader={() => { }} setDefaultProfile={() => { }} />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId('main-header')).toHaveTextContent('Социальная сеть ВРеакте');
});

test('should render with current header received through props', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Main pageContent={{ ...pageContent, currentHeader: 'someCurrentHeader' }} updateHeader={() => { }} setDefaultProfile={() => { }} />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId('current-header')).toHaveTextContent('someCurrentHeader');
});

test('should set profile to default on render, if history do not contain any inner state', () => {
  const setDefaultProfile = jest.fn();

  render(
    <MemoryRouter>
      <Provider store={store}>
        <Main pageContent={pageContent} setDefaultProfile={setDefaultProfile} updateHeader={() => { }} />
      </Provider>
    </MemoryRouter>
  );

  expect(setDefaultProfile).toHaveBeenCalled();
});

test('should update header with function that passed through props', () => {
  const updateHeader = jest.fn();

  render(
    <MemoryRouter>
      <Provider store={store}>
        <Main pageContent={pageContent} setDefaultProfile={() => { }} updateHeader={updateHeader} />
      </Provider>
    </MemoryRouter>
  );

  expect(updateHeader).toHaveBeenCalledWith('test');
});

test('should render content provided with mainContent prop', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Main
          pageContent={pageContent}
          setDefaultProfile={() => { }}
          updateHeader={() => { }}
          mainContent={<div data-testid='test-content' />}
        />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId('test-content')).toBeInTheDocument();
});
