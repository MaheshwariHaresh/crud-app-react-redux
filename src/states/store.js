import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
export default configureStore(
  {
    reducer: {
      users: UserReducer,
    },
  },
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
