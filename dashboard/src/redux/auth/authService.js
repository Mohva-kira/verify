import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const initialState = {
  data: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      console.warn('my auth state', action.payload)
      state.data = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setAuth,  } = authSlice.actions

export default authSlice.reducer


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ntaverify.com/api' }),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data) =>({url: `/auth/local`,
        
        method: 'POST',
        body: data
    }),
      }),

      register: builder.mutation({
        query: (data) => ({url: `/auth/local/register`,
        
        method: 'POST',
        body: data
    }),
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useLoginMutation, useRegisterMutation } = authApi