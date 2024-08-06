import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { redevableApi } from "./redevableService";
import redevableReducer from "./redevableService";
import auth from "./auth/authService";
import { authApi } from "./auth/authService";
import { auteursApi } from "./auteursService";
import profileReducer, { profileApi } from "./profileService";
import vignetteReducer, { vignetteApi } from "./vignetteService";
export const store = configureStore({
  reducer: {
    redevables: redevableReducer,
    auth: auth,
    profile: profileReducer,
    vignette: vignetteReducer,
    [redevableApi.reducerPath]: redevableApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [auteursApi.reducerPath]: auteursApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [vignetteApi.reducerPath]: vignetteApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      redevableApi.middleware,
      authApi.middleware,
      auteursApi.middleware,
      profileApi.middleware,
      vignetteApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
