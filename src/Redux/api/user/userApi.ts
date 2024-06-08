import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDonor: build.mutation({
            query: (data) => ({
                url: '/user/create-donor',
                method: 'POST',
                data: data
            })
        }),
        createRequester: build.mutation({
            query: (data) => ({
                url: '/user/create-requester',
                method: 'POST',
                data: data
            })
        }),
    })
})

export const { useCreateDonorMutation, useCreateRequesterMutation } = userApi;