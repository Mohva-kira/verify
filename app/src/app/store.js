import { configureStore } from '@reduxjs/toolkit'
import vignetteSlice from '../redux/vignetteSlice'
import { vignetteApi } from '../redux/vignette'
import { authApi } from '../redux/authApi'


export const store = configureStore({
  reducer: {
    [vignetteApi.reducerPath]: vignetteApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    vignette: vignetteSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vignetteApi.middleware, authApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)