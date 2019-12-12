import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_createDocumentError,
  c_createDocumentRequest,
  c_createDocumentSuccess,
  c_createDocumentTimeout
} from "../../../actions/client/requests/createDocumentRequest";
import {
  c_addMyDocId,
  c_removeMyDocId
} from "../../../actions/client/updateMyDocIds";
import { c_updateDocument } from "../../../actions/client/crudDocuments";

/**
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* c_createDocumentRequestWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_DOCUMENT_REQUEST,
    c_createDocumentRequestSaga
  );
}

/**
 *
 * @param action
 * @returns {IterableIterator<PutEffect<{type: *, message: *}>|PutEffect<BuiltAction<any>>|PutEffect<{docId, type}>|PutEffect<{type: *, error: *}>|PutEffect<{docId: *, type: *, message: *}>|PutEffect<{docId: *, type: *, docData: *}>|RaceEffect<<"TAKE", TakeEffectDescriptor> | <"CALL", CallEffectDescriptor>>>}
 */
export function* c_createDocumentRequestSaga(action) {
  // Send request
  yield put(send(c_createDocumentRequest(action.docData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_CREATE_DOCUMENT_SUCCESS),
    error: take(actionTypes.S_CREATE_DOCUMENT_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    // Replace myDocId with new one:
    const oldId = action.docData.id;
    yield put(c_removeMyDocId(oldId));
    yield put(c_addMyDocId(result.docId));

    // Update document with new id
    yield put(
      c_updateDocument(oldId, {
        id: result.docId,
        ...result.docData
      })
    );

    // Send success message
    yield put(c_createDocumentSuccess(result.docId, `document created`));
  } else if (error) {
    yield put(c_createDocumentError(error));
  } else if (timeout) {
    yield put(c_createDocumentTimeout(timeout));
  }
}