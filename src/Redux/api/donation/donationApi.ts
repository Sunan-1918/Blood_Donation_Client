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
            query: (data) => {
                console.log(data);
                return {
                    url: `/donation/donation-request/${data.id}`,
                    method: 'PUT',
                    data: data.payload
                }
            },
            invalidatesTags: [tagTypes.donation]
        }),


    }),
})

export const { useCreateDonationMutation, useGetDonationQuery, useUpdateDonationMutation } = donationApi