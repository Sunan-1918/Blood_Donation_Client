import { tagTypes } from "@/Redux/tag-type";
import { baseApi } from "../baseApi";

const donationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        createDonation: build.mutation({
            query: (data) => ({
                url: '/donation/donation-request',
                method: 'POST',
                data
            }),
            invalidatesTags: [tagTypes.donation]
        }),
        getDonation: build.query({
            query: () => ({
                url: '/donation/donation-request',
                method: 'GET'
            }),
            providesTags: [tagTypes.donation]
        }),

        updateDonation: build.mutation({
            query: ({ id, status }) => ({
                url: `/donation/donation-request/${id}`,
                method: 'PUT',
                data: status
            }),
            invalidatesTags: [tagTypes.donation]
        }),


    }),
})

export const { useCreateDonationMutation, useGetDonationQuery, useUpdateDonationMutation } = donationApi