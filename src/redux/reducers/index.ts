import { combineReducers } from "@reduxjs/toolkit";

import walletReducer from './basic';
// import userReducer from './users';
// import contentReducer from './contents';

export const rootReduers = combineReducers({
    wallet: walletReducer,
    // users: userReducer,
    // contents: contentReducer
});