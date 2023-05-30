import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import User from './User';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

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
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => { }}
        path=''
      />
    </BrowserRouter>
  );
});

test('should render follow button and invoke prop callback on follow click', () => {
  const toggleFollow = jest.fn();

  render(
    <BrowserRouter>
      <User
        toggleFollow={async (value) => toggleFollow(value)}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => { }}
        path=''
      />
    </BrowserRouter>
  );

  const followButton = screen.getByTestId(`user-follow-button-${user.id}`);
  expect(followButton).toBeInTheDocument();
  expect(toggleFollow).not.toBeCalled();
  userEvent.click(followButton);
  expect(toggleFollow).toBeCalledWith(user.followed);
});

test('follow button should receive unfollow description through props and render it depending on another props', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow='unfollowText'
        defaultStatus=''
        getUserProfile={() => { }}
        path=''
      />
    </BrowserRouter>
  );

  const followButton = screen.getByTestId(`user-follow-button-${user.id}`);
  expect(followButton).toBeInTheDocument();
  expect(followButton).toHaveTextContent('unfollowText');
});

test('follow button should receive follow description through props and render it depending on another props', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={{ ...user, followed: false }}
        follow='followText'
        unfollow='unfollowText'
        defaultStatus=''
        getUserProfile={() => { }}
        path=''
      />
    </BrowserRouter>
  );

  const followButton = screen.getByTestId(`user-follow-button-${user.id}`);
  expect(followButton).toBeInTheDocument();
  expect(followButton).toHaveTextContent('followText');
});

test('should render user status received through props', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => { }}
        path=''
      />
    </BrowserRouter>
  );

  const userStatus = screen.getByTestId(`user-status-${user.id}`);
  expect(userStatus).toBeInTheDocument();
  expect(userStatus).toHaveTextContent(user.status);
});

test('should render default status received through props', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={{ ...user, status: '' }}
        follow=''
        unfollow=''
        defaultStatus='defaultStatus'
        getUserProfile={() => { }}
        path=''
      />
    </BrowserRouter>
  );

  const userStatus = screen.getByTestId(`user-status-${user.id}`);
  expect(userStatus).toBeInTheDocument();
  expect(userStatus).toHaveTextContent('defaultStatus');
});

test('user link should receive path through props', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => { }}
        path='testPath'
      />
    </BrowserRouter>
  );

  const userLink = screen.getByTestId(`user-link-${user.id}`);
  expect(userLink).toBeInTheDocument();
  expect(userLink).toHaveAttribute('to', `testPath/${user.id}`);
});

test('click on user profile link should invoke prop callback', () => {
  const getUserProfile = jest.fn();
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={getUserProfile}
        path=''
      />
    </BrowserRouter>
  );

  const userLink = screen.getByTestId(`user-link-${user.id}`);
  expect(userLink).toBeInTheDocument();
  userEvent.click(userLink)
  expect(getUserProfile).toHaveBeenCalled();
});

test('should render user name', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => {}}
        path=''
      />
    </BrowserRouter>
  );

  const userName = screen.getByTestId(`user-name-${user.id}`);
  expect(userName).toBeInTheDocument();
  expect(userName).toHaveTextContent(user.name);
});

test('should render user country', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => {}}
        path=''
      />
    </BrowserRouter>
  );

  const userCountry = screen.getByTestId(`user-country-${user.id}`);
  expect(userCountry).toBeInTheDocument();
  expect(userCountry).toHaveTextContent(`${user.location.countryName},`);
});

test('should render user city', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => {}}
        path=''
      />
    </BrowserRouter>
  );

  const userCity = screen.getByTestId(`user-city-${user.id}`);
  expect(userCity).toBeInTheDocument();
  expect(userCity).toHaveTextContent(user.location.cityName);
});

test('should render properly user photo', () => {
  render(
    <BrowserRouter>
      <User
        toggleFollow={() => { }}
        user={user}
        follow=''
        unfollow=''
        defaultStatus=''
        getUserProfile={() => {}}
        path=''
      />
    </BrowserRouter>
  );

  const userAvatar = screen.getByTestId(`user-avatar-${user.id}`);
  expect(userAvatar).toBeInTheDocument();
  expect(userAvatar).toHaveAttribute('alt', user.pictureAlt);
  expect(userAvatar).toHaveAttribute('src', user.photos.small);
});
