export const actionTypes = {
  // ====================================================
  //    INTERNAL ACTIONS
  // ====================================================

  INIT_APP_INFO: "INIT_APP_INFO",
  UPDATE_MY_USER_ID: "UPDATE_MY_USER_ID",

  FLASH_INFO: "FLASH_INFO",
  FLASH_WARNING: "FLASH_WARNING",
  FLASH_ERROR: "FLASH_ERROR",

  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER",
  REPLACE_USER_LIST: "REPLACE_USER_LIST",

  ADD_DOCUMENT: "ADD_DOCUMENT",
  UPDATE_DOCUMENT: "UPDATE_DOCUMENT",
  DELETE_DOCUMENT: "DELETE_DOCUMENT",
  SEND_DOCUMENT: "SEND_DOCUMENT",

  // ====================================================
  //    WEBSOCKET ACTIONS
  // ====================================================

  // Server dispatched actions:

  WS_BEGIN_RECONNECT: "REDUX_WEBSOCKET::BEGIN_RECONNECT",
  WS_RECONNECT_ATTEMPT: "REDUX_WEBSOCKET::RECONNECT_ATTEMPT",
  WS_RECONNECTED: "REDUX_WEBSOCKET::RECONNECTED",
  WS_BROKEN: "REDUX_WEBSOCKET::BROKEN",
  WS_CLOSED: "REDUX_WEBSOCKET::CLOSED",
  WS_ERROR: "REDUX_WEBSOCKET::ERROR",
  WS_MESSAGE: "REDUX_WEBSOCKET::MESSAGE",
  WS_OPEN: "REDUX_WEBSOCKET::OPEN",
  // Extra actions:
  WS_CREATE_USER_SUCCESS: "WS::CREATE_USER_SUCCESS",
  WS_CREATE_USER_ERROR: "WS::CREATE_USER_ERROR",
  WS_CREATE_USER_TIMEOUT: "WS::CREATE_USER_TIMEOUT",
  WS_GET_USER_LIST_SUCCESS: "WS::GET_USER_LIST_SUCCESS",
  WS_GET_USER_LIST_ERROR: "WS::GET_USER_LIST_ERROR",
  WS_GET_USER_LIST_TIMEOUT: "WS::GET_USER_LIST_TIMEOUT",
  WS_USER_JOINED: "WS::USER_JOINED",
  WS_USER_LEFT: "WS::USER_LEFT",
  WS_USER_UPDATE: "WS::USER_UPDATE",

  // Client dispatched action types:

  WS_CONNECT: "REDUX_WEBSOCKET::CONNECT",
  WS_DISCONNECT: "REDUX_WEBSOCKET::DISCONNECT",
  WS_SEND: "REDUX_WEBSOCKET::SEND",
  // Extra actions:
  WS_CREATE_USER: "WS::CREATE_USER",
  WS_GET_USER_LIST: "WS::GET_USER_LIST"
};
