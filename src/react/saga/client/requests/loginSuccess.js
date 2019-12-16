import { put, select, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import { c_updateUser } from "../../../actions/client/crudUsers";
import { c_updateMyUserId } from "../../../actions/client/updateMyUserId";
import { c_getUserListRequest } from "../../../actions/client/requests/getUserListRequest";
import { c_createDocumentRequest } from "../../../actions/client/requests/createDocumentRequest";
import { c_getDocumentListRequest } from "../../../actions/client/requests/getDocumentListRequest";
import { selectDocument } from "../../../reducers/root";
import { displayUser } from "../../../actions/displayUser";

export function* c_loginSuccessWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_SUCCESS, c_loginSuccessSaga);
}

export function* c_loginSuccessSaga(action) {
  // Get default user id
  const { myUserId, myDocId } = yield select(state => state.client.status);
  // Update default user
  yield put(c_updateUser(myUserId, { id: action.userId }));
  // Update myUserId variable
  yield put(c_updateMyUserId(action.userId));

  // Send my document
  const document = yield select(state => selectDocument(state, myDocId));
  yield put(c_createDocumentRequest(document));

  // Request user and document list
  yield all([put(c_getUserListRequest()), put(c_getDocumentListRequest())]);

  // Finally display user on the frontEnd
  yield put(displayUser(action.userId));
}
