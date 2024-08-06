import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
      // pretend this field and this payload data exist for sake of example
      state.profile = action.payload;
    })
  }
});

// Action creators are generated for each case reducer function
export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ntaverify.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.data.jwt? getState().auth.data.jwt : JSON.parse(localStorage.getItem('auth')).jwt;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set('Content-type','application/json')
      headers.set('Accept','application/json')
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id) => `/members?filters[user][id][$eq]=${id}&populate=*`,

      
      
    }, 
    {
      

    }),

    postProfile: builder.mutation({
      query: (data) => ({
        url: `/members`,
        method: "POST",
        body: data,
      }),

      
    }),

   
    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfileQuery,usePostProfileMutation } = profileApi;
