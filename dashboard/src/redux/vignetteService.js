import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
  soldCount: 0,
  soldMini: 0,
  soldBig: 0
};

export const vignetteSlice = createSlice({
  name: "vignette",
  initialState,
  reducers: {
    setVignette: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
    setSoldCountState: (state, action) => {
      
      state.soldCount = action.payload
    },
    setSoldMiniState : (state, action) => {
      console.log('Mini set', action.payload)
      state.soldMini = action.payload
    }, 
    setSoldBig: (state, action) => {  
      state.soldBig = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(vignetteApi.endpoints.getVignette.matchFulfilled, (state, action) => {
      // pretend this field and this payload data exist for sake of example
      state.vignette = action.payload;
    })
  }
});

// Action creators are generated for each case reducer function
export const { setVignette,setSoldCountState, setSoldMiniState, setSoldBig  } = vignetteSlice.actions;

export default vignetteSlice.reducer;

export const vignetteApi = createApi({
  reducerPath: "vignetteApi",
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
    getVignette: builder.query({
      query: (id) => `/vignettes?populate=*&pagination[start]=0&pagination[limit]=-1`,
    }),

    postVignette: builder.mutation({
      query: (data) => ({
        url: `/vignettes`,
        method: "POST",
        body: data,
      }),

      
    }),

  
    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetVignetteQuery,usePostVignetteMutation } = vignetteApi;
