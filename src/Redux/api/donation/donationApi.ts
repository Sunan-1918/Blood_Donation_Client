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


    }),
})

const { useCreateDonationMutation } = donationApi