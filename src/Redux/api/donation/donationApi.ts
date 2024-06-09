import { baseApi } from "../baseApi";

const donationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        createDonation: build.mutation({
            query: (data) => ({
                url: '/donation/donation-request',
                method: 'POST',
                data
            })
        }),
        getDonation: build.query({
            query: (data) => ({
                url: '/donation/donation-request',
                method: 'GET'
            })
        }),


    }),
})

export const { useCreateDonationMutation, useGetDonationQuery } = donationApi