import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import { Provider } from 'react-redux';
import store from '../../../state/reduxStore';

jest.mock("./PaginationContainer", () => {
  const ComponentToMock = () => <div />;
  return ComponentToMock;
});

const user = {
  id: 'someTestId',
  followed: true,
  name: 'testUserName',
  status: 'testUserStatus',
  location: {
    countryName: 'testCountryName',
    cityName: 'testCityName',
  },
  photos: {
    small: 'smallUserPhoto',
  },
  pictureAlt: 'testPictureAlt'
}

test('should render component without crash', () => {
  render(
    <Provider store={store}>
      <UserList
        users={{ userList: [user] }}
        isLoading={false}
        loadUsers={() => { }}
      />
    </Provider>
  );
});

test('should render loading component if isLoading prop true', () => {
  render(
    <Provider store={store}>
      <UserList
        users={{ userList: [] }}
        isLoading
        loadUsers={() => { }}
      />
    </Provider>
  );

  expect(screen.getByTestId('loading-container')).toBeInTheDocument();
});

test('should not render loading component if isLoading prop true', () => {
  render(
    <Provider store={store}>
      <UserList
        users={{ userList: [user] }}
        isLoading={false}
        loadUsers={() => { }}
      />
    </Provider>
  );

  expect(screen.queryByTestId('loading-container')).not.toBeInTheDocument();
});

test('should invoke prop callback on render', () => {
  const loadUsers = jest.fn();
  render(
    <Provider store={store}>
      <UserList
        users={{
          userList: [],
          currentPage: 1,
          pageSize: 5,
        }}
        isLoading={false}
        loadUsers={loadUsers}
      />
    </Provider>
  );

  expect(loadUsers).toBeCalledWith(1, 5);
});

test('should render user data received through props', () => {
  render(
    <Provider store={store}>
      <UserList
        users={{ userList: [user] }}
        isLoading={false}
        loadUsers={() => { }}
      />
    </Provider>
  );

  const followButton = screen.getByTestId(`user-follow-button-${user.id}`);
  expect(followButton).toBeInTheDocument();
  expect(followButton).toHaveTextContent('Unfollow');

  const userStatus = screen.getByTestId(`user-status-${user.id}`);
  expect(userStatus).toBeInTheDocument();
  expect(userStatus).toHaveTextContent(user.status);

  const userLink = screen.getByTestId(`user-link-${user.id}`);
  expect(userLink).toBeInTheDocument();
  expect(userLink).toHaveAttribute('to', `/profile/${user.id}`);

  const userName = screen.getByTestId(`user-name-${user.id}`);
  expect(userName).toBeInTheDocument();
  expect(userName).toHaveTextContent(user.name);

  const userCountry = screen.getByTestId(`user-country-${user.id}`);
  expect(userCountry).toBeInTheDocument();
  expect(userCountry).toHaveTextContent(`${user.location.countryName},`);

  const userCity = screen.getByTestId(`user-city-${user.id}`);
  expect(userCity).toBeInTheDocument();
  expect(userCity).toHaveTextContent(user.location.cityName);

  const userAvatar = screen.getByTestId(`user-avatar-${user.id}`);
  expect(userAvatar).toBeInTheDocument();
  expect(userAvatar).toHaveAttribute('alt', user.pictureAlt);
  expect(userAvatar).toHaveAttribute('src', user.photos.small);
});

test('should render header title provided with props', () => {
  render(
    <Provider store={store}>
      <UserList
        users={{ userList: [user], header: 'testHeader' }}
        isLoading={false}
        loadUsers={() => { }}
      />
    </Provider>
  )

  expect(screen.getByTestId('users-list-header')).toHaveTextContent('testHeader');
});
