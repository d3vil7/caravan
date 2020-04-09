import { combineReducers } from "redux";

import settingsReducer from "./settingsReducer";
import clientReducer from "./clientReducer";
import braidReducer from "./braidReducer";
import quorumReducer from "./quorumReducer";
import addressReducer from "./addressReducer";
import walletReducer from "./walletReducer";

import ownershipReducer from "./ownershipReducer";
import signatureImportersReducer from "./signatureImportersReducer";
import transactionReducer from "./transactionReducer";
import keystoreReducer from "./keystoreReducer";
import testSuiteRunReducer from "./testSuiteRunReducer";
import errorNotificationReducer from "./errorNotificationReducer";

import {
  UPDATE_DEPOSIT_NODE,
  UPDATE_CHANGE_NODE,
  RESET_WALLET,
} from "../actions/walletActions";

const spendReducers = combineReducers({
  ownership: ownershipReducer,
  transaction: transactionReducer,
  signatureImporters: signatureImportersReducer,
});

const walletReducers = combineReducers({
  deposits: braidReducer(UPDATE_DEPOSIT_NODE),
  change: braidReducer(UPDATE_CHANGE_NODE),
  common: walletReducer,
});

const appReducer = combineReducers({
  settings: settingsReducer,
  client: clientReducer,
  address: addressReducer,
  spend: spendReducers,
  quorum: quorumReducer,
  wallet: walletReducers,
  testSuiteRun: testSuiteRunReducer,
  keystore: keystoreReducer,
  errorNotification: errorNotificationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_WALLET) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
