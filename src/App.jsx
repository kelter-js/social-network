import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import authenticateUser from "./thunk/authenticateUser";
import ComponentRouter from "./ComponentRouter";
import useInitiatePath from "./hooks/useInitiatePath";
import {
  getMenuPaths,
  getAuthenticationState,
} from "./state/selectors/serviceSelectors";
import UnauthorizedRoutes from "./UnauthorizedRoutes";

const queryClient = new QueryClient();

const mapStateToProps = (state) => ({
  defaultMenuPaths: getMenuPaths(state),
  isAuthenticated: getAuthenticationState(state),
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticateUser),
});

const App = ({ defaultMenuPaths, authenticate, isAuthenticated }) => {
  const history = useHistory();
  const redirectPath = useInitiatePath(history);

  const redirectByCredentials = () => {
    if (isAuthenticated && history.location.pathname === "/login") {
      history.push(redirectPath ?? "/profile");
    }
  };

  useEffect(authenticate, []);
  useEffect(redirectByCredentials, [isAuthenticated]);

  const getContent = () => {
    if (!isAuthenticated) {
      return <UnauthorizedRoutes />;
    }

    return <ComponentRouter paths={defaultMenuPaths} />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      {getContent()}
    </QueryClientProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
