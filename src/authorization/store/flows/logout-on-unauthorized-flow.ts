import { push } from "connected-react-router";
import { put, select, take } from "redux-saga/effects";

import { ApplicationActionTypes, SetApplicationErrorAction } from "#/application/store/types";
import { clearAuthorization } from "#/authorization/store/actions";
import { User } from "#/core/entities/user";
import { ApplicationState } from "#/core/store/store";

export function* logoutOnUnauthorizedFlow() {
  while (true) {
    const action: SetApplicationErrorAction = yield take(ApplicationActionTypes.SET_APPLICATION_ERROR);
    const { error } = action.payload;

    const user: User = yield select((state: ApplicationState) => state.authorization.currentAuthorization.user);

    const shouldRedirectToAuthorization = !user.isEmpty() && error.isUnauthorized();

    if (shouldRedirectToAuthorization) {
      yield put(push("/authorization"));
      yield put(clearAuthorization());
    }
  }
}
