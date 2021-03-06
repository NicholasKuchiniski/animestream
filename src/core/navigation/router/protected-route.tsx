import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { User } from "#/core/entities/user";
import { Page } from "#/core/navigation/components/page/page";
import { ProtectedRouteProps } from "#/core/navigation/router/types";
import { ApplicationState } from "#/core/store/store";

export function ProtectedRoute(props: ProtectedRouteProps) {
  const { exact, path, component } = props;

  const user = useSelector<ApplicationState, User>((state) => state.authorization.currentAuthorization.user);

  if (user.isEmpty()) {
    return <Redirect to="/authorization" />;
  }

  return (
    <Page>
      <Route exact={exact} path={path} component={component} />
    </Page>
  );
}
