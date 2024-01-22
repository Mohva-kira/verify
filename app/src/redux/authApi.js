import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ntaverify.com/api/auth' },  ),
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json")
    headers.set('Authorization', 'Bearer 8851a2759e22864c94a919a7239f4f3ec33a44fb3ed443a2a886fc4eb0a16c81a9003ed806a76d1b9a892bf7ba7a8b6d3c59f9cdd047f672bb3ecbea46e6051fe931605275bf095fe8b1128c03edd7c0ae77a39441366a568e85182074dfba27a63ca2a5a14cc84abff4dd1ada25cbaf1be3f36b4a158e9096534dcdfa46c3f0')

  },
  endpoints: (builder) => ({
  
    login: builder.mutation({
        query: (data) => ({
                url:`/local`,
                method: 'POST',
                body: data
            }),
      }),
      register: builder.mutation({
        query: (data) => ({
                url:`/local/`,
                method: 'POST',
                body: data
            }),
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useLoginMutation, useRegisterMutation } = authApi