import React from 'react';
import '@testing-library/jest-dom';
import Feed from './Feed';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

const contentProp = {
  data: {
    post: "Hey, is there anybody?",
    likes: 15,
    liked: false
  },
  postId: 0,
  changeLikeState: () => { },
}

test('should render component without crash', () => {
  render(<Feed {...contentProp} />);
});

test('should render text of post, received through props', () => {
  render(<Feed {...contentProp} />);

  expect(screen.getByTestId('post-text-0')).toHaveTextContent("Hey, is there anybody?");
});

test('like button should receive specific css class depending on received props', () => {
  render(<Feed {...contentProp} />);

  expect(screen.getByTestId('post-button-0')).toHaveClass('feed__likes');
});

test('like button should get different css class depending on received props', () => {
  const newProps = { ...contentProp }
  newProps.data.liked = true;

  render(<Feed {...newProps} />);

  expect(screen.getByTestId('post-button-0')).toHaveClass('feed__likes feed__likes--pressed');
});

test('like button should render amount of likes as inner child element', () => {
  render(<Feed {...contentProp} />);

  expect(screen.getByTestId('post-button-0')).toHaveTextContent(15);
});

test('click on like button should invoke callback received through props', () => {
  const newProps = { ...contentProp }
  const handleLikeStateChange = jest.fn();
  newProps.changeLikeState = handleLikeStateChange;

  render(<Feed {...newProps} />);

  const button = screen.getByTestId('post-button-0');
  userEvent.click(button);

  expect(handleLikeStateChange).toBeCalledTimes(1);
  expect(handleLikeStateChange).toBeCalledWith(newProps.postId);
});


/*
test('should render annotation text received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('profile-annotation');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(contentProp.defaultAnnotations.userInfo);
});

test('should render skills text received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('profile-skills');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(contentProp.defaultAnnotations.skills);
});

test('should render contacts text received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('profile-contacts');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(contentProp.defaultAnnotations.contacts);
});

test('should render aboutMe text received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('profile-template-aboutMe');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(contentProp.defaultTemplates.aboutMe);
});

test('should render lookingForJob text received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('profile-template-lookingForJob');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(contentProp.defaultTemplates.skills);
});

test('should render icon lookingForJob with corrent src received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('looking-for-jon-icon');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveAttribute('src', contentProp.jobIcons.dontLookForJobIcon);
});

test('should render icon lookingForJob with title received through props', () => {
  render(
    <Provider store={store}>
      <Profile
        user={contentProp.currentUser}
        annotations={contentProp.defaultAnnotations}
        templates={contentProp.defaultTemplates}
        jobIcons={contentProp.jobIcons}
        titles={contentProp.lookingForJobTitle}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId('looking-for-jon-icon');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveAttribute('title', contentProp.lookingForJobTitle.no);
});
*/
