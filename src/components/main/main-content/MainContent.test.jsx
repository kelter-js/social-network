import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainPageContent from "./MainContent";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../state/reduxStore";

const contentProp = {
  currentUser: {},
  defaultAnnotations: {
    userInfo: "Some information about user:",
    skills: "Current user skills:",
    contacts: "User profile external links:",
  },
  defaultTemplates: {
    skills: "This user decided to not share his information abouts skills",
    aboutMe: "This user decided to not share any information",
    contacts: "This user decided to not share any kind of link",
  },
  jobIcons: {
    lookingForJobIcon: "/img/lookingForJob.png",
    dontLookForJobIcon: "/img/dontLookForJob.png",
  },
  lookingForJobTitle: {
    yes: "This user currently looking for some job.",
    no: "This user don`t look for any kind of job.",
  },
  feedDefaultText: "Share news with your friends!",
};

jest.mock("@tanstack/react-query", () => ({
  useQuery: () => ({}),
}));

const mockHistoryListen = (func) => {
  func({ pathname: "/test/tes" });
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    listen: mockHistoryListen,
  }),
}));

test("should render component without crash", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );
});

test("should render loader instead of content in case if isLoading prop is true", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={true}
      />
    </Provider>
  );

  expect(screen.getByTestId("loading-container")).toBeInTheDocument();
});

test("should use callback received through props", async () => {
  const addPost = jest.fn();
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={addPost}
        isLoading={false}
      />
    </Provider>
  );

  userEvent.type(screen.getByTestId("new-post-textarea"), "test message");
  userEvent.click(screen.getByTestId("create-new-post"));

  await waitFor(() => expect(addPost).toBeCalled());
  await waitFor(() => expect(addPost).toBeCalledTimes(1));
  await waitFor(() => expect(addPost).toBeCalledWith("test message"));
});

test("should render placeholder text received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("add-new-post-label");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(contentProp.feedDefaultText);
});

test("should render annotation text received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("profile-annotation");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(
    contentProp.defaultAnnotations.userInfo
  );
});

test("should render skills text received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("profile-skills");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(
    contentProp.defaultAnnotations.skills
  );
});

test("should render contacts text received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("profile-contacts");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(
    contentProp.defaultAnnotations.contacts
  );
});

test("should render aboutMe text received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("profile-template-aboutMe");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(
    contentProp.defaultTemplates.aboutMe
  );
});

test("should render lookingForJob text received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId(
    "profile-template-lookingForJob"
  );
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent(
    contentProp.defaultTemplates.skills
  );
});

test("should render icon lookingForJob with corrent src received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("looking-for-jon-icon");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveAttribute(
    "src",
    contentProp.jobIcons.dontLookForJobIcon
  );
});

test("should render icon lookingForJob with title received through props", () => {
  render(
    <Provider store={store}>
      <MainPageContent
        pageContent={contentProp}
        addPost={() => {}}
        isLoading={false}
      />
    </Provider>
  );

  const spanWithPlaceholder = screen.getByTestId("looking-for-jon-icon");
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveAttribute(
    "title",
    contentProp.lookingForJobTitle.no
  );
});
