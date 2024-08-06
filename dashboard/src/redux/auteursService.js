import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const redevableSlice = createSlice({
  name: "Auteur",
  initialState,
  reducers: {
    setAuteur: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuteur } = redevableSlice.actions;

export default redevableSlice.reducer;

export const auteursApi = createApi({
  reducerPath: "auteursApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.data.jwt;

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
    getAuteur: builder.query({
      query: (id) => `/adherents/${id}`,
    }),

    postAuteur: builder.mutation({
      query: (data) => ({
        url: `/adherents`,
        method: "POST",
        body: data,
      }),

      
    }),

   
    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAuteurQuery,usePostAuteurMutation } = auteursApi;
