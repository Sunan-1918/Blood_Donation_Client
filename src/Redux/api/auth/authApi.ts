import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        changePassword: build.mutation({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'POST',
                data: data
            })
        }),
        createDonor: build.mutation({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'POST',
                data: data
            })
        }),
        createRequester: build.mutation({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'POST',
                data: data
            })
        }),
    })
})

export const { useChangePasswordMutation } = authApi;